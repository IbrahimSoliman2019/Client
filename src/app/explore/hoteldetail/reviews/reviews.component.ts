import { Component, Input, OnInit } from '@angular/core';

import { PropertyReview } from 'src/app/shared/Models/IPropertyReview';
import { User } from 'src/app/shared/Models/IUser';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input()Reviews :PropertyReview[] ;

  @Input()UserDetail :User[] ;
  val:number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
