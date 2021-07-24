import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Model/user';
import {UsersService } from '../../Services/users.service' ;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email:string="";
  password:string="";
  checkUser=new User ('','','');
  check:any;
  error:any;

  

  Login(login:ElementRef)
  {
    console.log(login.nativeElement);
    /* this.email=login.value.email;
    this.password=login.value.password;
    this.checkUser=new User ('',this.email,this.password);

  this.UserSer.GetUser(this.checkUser).subscribe(response=>{
    this.checkUser=response
  },error=>{
    this.error=error
  }
  );
  console.log(login);

    if (!this.error)
    {
      this.route.navigateByUrl("");
    }
    else
    {
      alert("Please sure that email and password is correct")
    } */
  }




  constructor(public UserSer:UsersService,public route:Router) { }

  ngOnInit(): void {
  }

}
