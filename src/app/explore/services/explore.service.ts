import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { PropertyRoot } from 'src/app/shared/Models/PropertyRoot';
import { environment } from 'src/environments/environment';
import {PropretyParams} from '../../shared/Models/PropertyParams';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  BaseUrl = environment.ApiUrl;
  //api/property?stateid=id?price=20
  constructor(private http: HttpClient) { }
  GetProperties(propertyparams:PropretyParams) {
    let params = new HttpParams();
    if(propertyparams.StateId)
    params = params.append('StateId', propertyparams.StateId.toString());
    if(propertyparams.Price )
    params = params.append('price ', propertyparams.Price.toString());
    if(propertyparams.PropertyType)
    params = params.append('PropertyType ',propertyparams.PropertyType.toString());


<<<<<<< HEAD
    //return'hi'+name }) //rxjs
    return this.http.get<PropertyRoot[]>(`${this.BaseUrl}/property`, { observe: 'response', params })
=======
    return this.http.get<IProperty[]>(`${this.BaseUrl}/property`, { observe: 'response', params })
>>>>>>> afb722c7bda6b77d51660a123fa831a868f0fa61
      .pipe(map(res => {
        return res.body
      }));
  }
}
