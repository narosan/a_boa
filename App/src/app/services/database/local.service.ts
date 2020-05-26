import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  get possuiAutenticacao(): boolean {
    return !!localStorage.getItem('USER_TOKEN');
  }

  get getUserToken(): string {
    return localStorage.getItem('USER_TOKEN');
  }

  set setUserToken(token) {
    localStorage.setItem('USER_TOKEN', token);
  }

  set setUser(user) {
    localStorage.setItem('USER', JSON.stringify(user));
  }

  get getUser(): User {
    return JSON.parse(localStorage.getItem('USER')) as User;
  }
}
