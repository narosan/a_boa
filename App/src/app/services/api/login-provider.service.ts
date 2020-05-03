import { Injectable } from '@angular/core';
import { HttpProviderService } from './http-provider.service';
import { User } from 'src/app/model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginProviderService extends HttpProviderService<User>{

  constructor(
    http: HttpClient
  ) { 
    super(http, 'login');
  }
}
