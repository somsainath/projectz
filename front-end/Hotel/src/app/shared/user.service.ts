import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = new User;
  users: User[] = [];
  readonly baseURL = 'http://localhost:3001';

  constructor(private http : HttpClient,
    private _router:Router) { }

  postSignup(user : User){
    return this.http.post<any>(this.baseURL+'/signup',user);
  }

  postLogin(user : User){
    return this.http.post<any>(this.baseURL+'/login',user);
  }

  postMlogin(user : User){
    return this.http.post<any>(this.baseURL+'/mlogin',user);
  }

  postOlogin(user : User){
    return this.http.post<any>(this.baseURL+'/ologin',user);
  }


  loggedIn(){
    return !!localStorage.getItem('token');
  }


  getToken(){
    return localStorage.getItem('token');
  }

  postMsignup(user : User){
    return this.http.post<any>(this.baseURL+'/msignup',user);
  }


  
  
}
