import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HoteldetailService } from '../../services/hoteldetail.service';
import {PropertyReview} from 'src/app/shared/Models/IPropertyReview'
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  PropertyReview: PropertyReview;
  val:number= 2;
  constructor(public ar:ActivatedRoute,public hoteldetailser:HoteldetailService) { }

  save(review:any) {
    this.hoteldetailser.AddpropertyDetail(this.PropertyReview).subscribe(a=> {console.log(a);
    // this.r.navigateByUrl("/hoteldetails");
    // this.val = review.va

  })
}
  ngOnInit(): void {

    // this.hoteldetailser.GetAllPropertyReviews.subscribe(
    //   a=> {this.PropertyReview=a;console.log(a);
    //   }
    // )
  }

}
