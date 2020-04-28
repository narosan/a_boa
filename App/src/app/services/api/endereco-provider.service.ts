import { Injectable } from '@angular/core';
import { HttpProviderService } from './http-provider.service';
import Endereco from 'src/app/model/Endereco';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoProviderService extends HttpProviderService<Endereco> {
  constructor(http: HttpClient) {
    super(http, 'endereco')
  }
}
