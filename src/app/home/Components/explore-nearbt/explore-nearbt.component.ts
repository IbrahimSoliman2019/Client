import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { State } from '../state';

@Component({
  selector: 'app-explore-nearbt',
  templateUrl: './explore-nearbt.component.html',
  styleUrls: ['./explore-nearbt.component.scss']
})
export class ExploreNearbtComponent implements OnInit {
state:State[]=[];
  constructor(public staSer :HomeService) { }

  ngOnInit(): void {
    this.staSer.GetAllState().subscribe(a=>
      {
    this.state=a ;
      });
  }

}
