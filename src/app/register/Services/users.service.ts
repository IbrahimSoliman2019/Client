import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private Users: User[];
  BaseUrl = environment.ApiUrl;


  AddNewUser(user: User) {
    return this.http.post<User>(`${this.BaseUrl}/Account/register`, user);

  }

  LoginUser(user:User)
  {
    return this.http.post<User>(`${this.BaseUrl}/Account/login`, user);
  }


  constructor(private http: HttpClient) { }


}
