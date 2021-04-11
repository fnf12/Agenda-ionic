import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sliede',
  templateUrl: './sliede.page.html',
  styleUrls: ['./sliede.page.scss'],
})
export class SliedePage implements OnInit {

  ocultar = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/tabss');
  }

}
