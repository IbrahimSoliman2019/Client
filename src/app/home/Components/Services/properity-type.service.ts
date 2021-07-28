import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProperityType } from '../../properity-type';


@Injectable({
  providedIn: 'root'
})
export class ProperityTypeService {
  BaseUrl = environment.ApiUrl;

  constructor(public http: HttpClient) { }


  GetPropType()
  {
    return this.http.get<ProperityType[]>(`${this.BaseUrl}/property_tybe`);
  }

}
