import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { Hoteldetail } from '../Models/hoteldetail';
import { ExploreService } from '../services/explore.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  stateid: number;
  properties: IProperty[]=[];

  
  

  constructor(private route: ActivatedRoute, private expservice: ExploreService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.stateid = params['id']
      alert(this.stateid)

      if (this.stateid) {
        this.expservice.GetProperties(this.stateid).subscribe(res => {
          // this.properties = res;
          console.log(res["data"]);
          this.properties=res["data"];
          console.log(this.properties);
          
          
        });
      }
    })
  }

}
