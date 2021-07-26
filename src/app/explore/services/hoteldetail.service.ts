import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hoteldetail } from '../Models/hoteldetail';

@Injectable({
  providedIn: 'root'
})
export class HoteldetailService {
  private baseUrl:string = environment.ApiUrl
  constructor(public http:HttpClient) { }

  GetAllPropertyDetail() {

    return this.http.get<Hoteldetail[]>(this.baseUrl);

  }

  GetPropertyDetail(id:number){
    return this.http.get<Hoteldetail>(`${this.baseUrl}/property/${id}`);
  }

  AddpropertyDetail(hotel:Hoteldetail) {
    return this.http.post<Hoteldetail>(this.baseUrl, hotel);
  }

  UpdatepropertyDetail(hotel:Hoteldetail) {
    return this.http.put<Hoteldetail>(this.baseUrl+"/"+hotel.id, hotel);
  }

  DeletepropertyDetail(id:number) {
    return this.http.delete<Hoteldetail>(this.baseUrl+"/"+id);

  }

}
