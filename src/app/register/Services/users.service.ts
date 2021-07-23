import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {User} from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService
 {
  private Users: User[ ] =
  [
    new User('Admin', 'admin@gmail.com', 'admin123'),
    new User('Ahmen', 'ahmed@gmail.com', 'ahmed123'),
    new User('Ail', 'ail@gmail.com', 'ail123'),
    new User('Kareem', 'kareem@gmail.com', 'kareem123'),
    new User('Ramy', 'ramy@gmail.com', 'ramy123'),
  ];

  BaseUrl = environment.ApiUrl;

  constructor(private http:HttpClient){}

  GetUser(user:User)
  {
 return  this.http.post<User>(`${this.BaseUrl}/Account/register`,user);
   
  }

  AddUser(user:User)
  {
    for (let i = 0; i < this.Users.length; i++) 
    {
      if (this.Users[i].email==user.email) 
      {
        return null
      }
    }

    return this.Users.push(user);
  }


}
