import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { Hoteldetail } from '../Models/hoteldetail';
import { HoteldetailService } from '../services/hoteldetail.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  properties: IProperty[];
  prop = new Hoteldetail();
  id:number;
  constructor(private route:ActivatedRoute, private propertyservice:HoteldetailService) {

   }

  ngOnInit(): void {

    // this.propertyservice = this.route.params.subscribe(params => {
    //   const id = params['id']
    // })


    this.route.params.subscribe(a=> {
      this.propertyservice.GetPropertyDetail(a['id']).subscribe(
        d=> this.prop=d
        // d=> this.dept=d
      )
    })
   }

}
