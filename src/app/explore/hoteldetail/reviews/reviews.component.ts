import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { User } from 'src/app/register/Model/user';
=======

>>>>>>> afb722c7bda6b77d51660a123fa831a868f0fa61
import { PropertyReview } from 'src/app/shared/Models/IPropertyReview';
import { User } from 'src/app/shared/Models/IUser';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
<<<<<<< HEAD
  @Input() Reviews :PropertyReview[] ;
  @Input()UserDetail :User[] ;
=======
  @Input()Reviews :PropertyReview[] ;
>>>>>>> afb722c7bda6b77d51660a123fa831a868f0fa61

  @Input()UserDetail :User[] ;
  val:number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
