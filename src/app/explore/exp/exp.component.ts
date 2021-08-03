import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProperityTypeService } from 'src/app/home/Components/Services/properity-type.service';
import { ProperityType } from 'src/app/home/properity-type';
import { PropertyRoot } from 'src/app/shared/Models/PropertyRoot';
import { Hoteldetail } from '../Models/hoteldetail';
import { ExploreService } from '../services/explore.service';
import {PropretyParams} from '../../shared/Models/PropertyParams';
import { IProperty } from 'src/app/shared/Models/IProperty';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  stateid: number;
  price:number;
  Filter : PropertyRoot[];
  Searchcities :PropertyRoot[];
 // materialExampleRadios:string;
search:string;
getSearch():string
{
  return this.search
}
setSearch(value:string)
{
  this.search=value;
  this.Filter=this.FilterCity(value);
}
FilterCity(Searchcity :string )
{
  return this.Searchcities.filter(city=>
    {
     city.propertyDTo.cityName.toLowerCase().indexOf(Searchcity.toLowerCase())!==-1;

    })
}




  properties: PropertyRoot[];
proppertyparams:PropretyParams= new PropretyParams() ;
propertyTypeId :number;

PropType :ProperityType[]=[];
  constructor(private route: ActivatedRoute, private expservice: ExploreService ,private PrType: ProperityTypeService ) {
  }

  ngOnInit(): void {
this.Filter=this.Searchcities;

    this.route.params.subscribe((params: Params) => {
      this.proppertyparams.StateId = params['id'];
      if (this.proppertyparams.StateId) {
        this.expservice.GetProperties(this.proppertyparams).subscribe(res => {
          console.log(res["data"]);
          this.properties=res["data"];
          console.log(this.properties);
        });
      }
    })


    this.route.params.subscribe((parms:Params) =>
    {
      this.proppertyparams.Price=parms['id'];
      if(this.proppertyparams.Price)
      {
        this.expservice.GetProperties(this.proppertyparams).subscribe(res=>
          {
            console.log(res);
            this.properties=res;
            console.log(this.properties);
          })
      }
    })





    this.route.params.subscribe((params: Params) => {
      this.propertyTypeId = params['id']
             //   alert(this.propertyTypeId) ;
      if (this.propertyTypeId) {
        this.PrType.GetPropType().subscribe(res => {
       //   console.log(res["data"]);
          this.PropType=res;
          console.log(this.propertyTypeId);
        });
      }
    })
// onPriceChecked(){
//   this.proppertyparams.Price =
// }

//  Pagechanged(event:any){
// this.proppertyparams.PageIndex = event;
//  }




  }
}
