import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  BaseUrl = environment.ApiUrl;
//api/property?stateid=id
  constructor(private http: HttpClient) { }
  GetProperties(id: number) {
    let params = new HttpParams();
    params = params.append('stateid', id.toString());//http //ibrahim hi map(res=>{

   //return'hi'+name }) //rxjs
   return  this.http.get<IProperty[]>(`${this.BaseUrl}/property`, { observe: 'response', params })
      .pipe(map(res => {
        return res.body
      }));
  }
}
