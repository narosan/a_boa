import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/database/local.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  public possuiAutenticacao: boolean = false;

  constructor(
    private localService: LocalService
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {

  }

  verificaAutenticacao() {
    this.possuiAutenticacao = this.localService.possuiAutenticacao;
  }
}
