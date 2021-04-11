import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  ocultar = '';

  constructor(private navCtrl: NavController) { }



  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/tabs/tab1');
  }
}
