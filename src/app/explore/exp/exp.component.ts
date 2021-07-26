import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { ExploreService } from '../services/explore.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  stateid: number;
  properties: IProperty[];

  constructor(private route: ActivatedRoute, private expservice: ExploreService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.stateid = params['id']
      if (this.stateid) {
        this.expservice.GetProperties(this.stateid).subscribe(res => {
          this.properties = res;
        });
      }
    })
  }

}
