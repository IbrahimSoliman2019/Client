import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hoteldetail } from '../../Models/hoteldetail';
import { HoteldetailService } from '../../services/hoteldetail.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelDetail = new Hoteldetail();
    constructor(public ar:ActivatedRoute,public hoteldetailser:HoteldetailService ) {

   }

   ngOnInit(): void {
    this.ar.params.subscribe(a=> {
      this.hoteldetailser.GetPropertyDetail(a['id']).subscribe(
        d=> this.hotelDetail=d
      )
    })
  }


}
