import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoteldetailService {
  private baseUrl:string = environment.ApiUrl
  constructor(public http:HttpClient) { }


  GetPropertyDetail(id:number){
    return this.http.get(`${this.baseUrl}/property/${id}`);
  }

}
