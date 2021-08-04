import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProperityTypeService } from 'src/app/home/Components/Services/properity-type.service';
import { ProperityType } from 'src/app/home/properity-type';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { Hoteldetail } from '../Models/hoteldetail';
import { ExploreService } from '../services/explore.service';
import { PropretyParams } from '../../shared/Models/PropertyParams';
import { getParseErrors } from '@angular/compiler';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss'],
})
export class ExpComponent implements OnInit {
  proppertyparams: PropretyParams = new PropretyParams();

  properties: IProperty[] = [];
  Prices = [
    { value: 100, description: 'Under $100' },
    { value: 200, description: 'Under $200' },
    { value: 300, description: 'Under $300' },
    { value: 400, description: 'Under $400' },
    { value: 500, description: 'Under $500' },
    { value: 600, description: 'Under $600' },
  ];
  PropertyTypes = [
    { value: 'Unique Stays' },
    { value: 'Outdoor Getways' },
    { value: 'Entire Homes' },
  ];

  propertyTypeId: number;
  PropType: ProperityType[] = [];
  constructor(
    private route: ActivatedRoute,
    private expservice: ExploreService,
    private PrType: ProperityTypeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.proppertyparams.StateId = params['id'];

      if (this.proppertyparams.StateId) {
        this.getProperties();
      }
    });

    this.route.params.subscribe((params: Params) => {
      this.propertyTypeId = params['id'];
      alert(this.propertyTypeId);
      if (this.propertyTypeId) {
        this.PrType.GetPropType().subscribe((res) => {
          //   console.log(res["data"]);
          this.PropType = res;
          console.log(this.propertyTypeId);
        });
      }
    });
  }

  getProperties() {
    this.expservice.GetProperties(this.proppertyparams).subscribe((res) => {
      this.properties = res['data'];
    });
  }
  onPriceChecked(checked: boolean, value: number) {
    if (checked) this.proppertyparams.Price = value;
    this.getProperties();
  }
  OnPropertyTypeChecked(checked: boolean, value: string) {
    if (checked) this.proppertyparams.PropertyType = value;
    this.getProperties();
  }

  //  Pagechanged(event:any){
  // this.proppertyparams.PageIndex = event;
  //  }
}
