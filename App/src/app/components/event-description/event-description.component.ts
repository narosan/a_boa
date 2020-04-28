import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent implements OnInit {

  @Input('evento') evento: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
