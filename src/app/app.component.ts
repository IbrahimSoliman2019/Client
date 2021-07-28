import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './shared/services/auth-guard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  title = 'Client';
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/products");
  }
}
