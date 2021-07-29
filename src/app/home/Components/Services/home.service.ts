import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { State } from '../state';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  BaseUrl = environment.ApiUrl;

  constructor(public http: HttpClient) { }
  GetAllState(country: string) {
    let params = new HttpParams();
    if(country!=null)
    params = params.append('Country', country);
  //  return this.http.get<State[]>(`${this.BaseUrl}/State`);

    return this.http.get<State[]>(`${this.BaseUrl}/State`,{observe:'response',params})
    .pipe(map(res=>{
      return res.body;
    }));
  }
  GetState(){
    return  this.http.get<State[]>(`${this.BaseUrl}/State`);
    }





}

