import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HoteldetailService } from '../services/hoteldetail.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute, private propertyservice:HoteldetailService) {

   }

  ngOnInit(): void {

  //   this.propertyservice = this.route.params.subscribe(params => {
  //     const id = params['id']
  //   })
   }

}
