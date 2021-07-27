import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { publish } from 'rxjs/operators';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  CheReg:boolean;
  logOut()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl("")

  }

  

  constructor(public auth:AuthGuardService,private router:Router)
  {
     this.CheReg=this.auth.canActivate();
  }

  ngOnInit(): void {
  }

}
