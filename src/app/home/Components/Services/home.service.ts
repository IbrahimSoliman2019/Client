import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { State } from '../state';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  BaseUrl = environment.ApiUrl;

  constructor(public http:HttpClient) { }
  GetAllState(){
  return  this.http.get<State[]>(`${this.BaseUrl}/State` );
  }
  GetState(id:number){
    return  this.http.get<State[]>(`${this.BaseUrl}/State`+"/" +id);
    }


}
