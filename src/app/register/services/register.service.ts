import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
public user =new User("" , "",  " " , 123,123);


  constructor() { }
}
