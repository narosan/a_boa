import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async success(msg = 'Sucesso!') {
    const toast = this.toastCtrl.create({
      animated: true,
      color: 'success',
      message: msg,
      position: "bottom",
      translucent: true,
      duration: 5000
    });
    (await toast).present();
  }

  async error(msg = 'Error!') {
    const toast = this.toastCtrl.create({
      animated: true,
      color: 'danger',
      message: msg,
      position: "bottom",
      translucent: true,
      duration: 5000
    });
    (await toast).present();
  }
}
