import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsComponent } from 'src/app/home/Components/hotels/hotels.component';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { Hoteldetail } from '../../Models/hoteldetail';
import { HoteldetailService } from '../../services/hoteldetail.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  // hotelDetail = new Hoteldetail();
  @Input() hotelDetail :IProperty;

  prop:IProperty ;
    constructor(public ar:ActivatedRoute,public hoteldetailser:HoteldetailService  ) {

   }
   ngOnInit(): void {
  
  }

}
