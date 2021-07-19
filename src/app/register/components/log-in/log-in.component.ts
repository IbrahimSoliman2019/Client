import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor() { }
  email:string="";
  password:string="";
  OnFormSave(log)
  {
    console.log("Submit form")
  }
  ngOnInit(): void {
  }

}
