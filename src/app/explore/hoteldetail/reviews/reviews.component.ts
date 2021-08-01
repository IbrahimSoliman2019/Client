import { Component, Input, OnInit } from '@angular/core';
import { PropertyReview } from 'src/app/shared/Models/IPropertyReview';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() Reviews :PropertyReview[] ;
  

  constructor() { }

  ngOnInit(): void {
  }

}
