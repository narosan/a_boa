import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  get possuiAutenticacao(): boolean {
    return !!localStorage.getItem('USER_TOKEN');
  }
}
