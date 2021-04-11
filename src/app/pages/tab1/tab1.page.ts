import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { DetalleCalendarioComponent } from '../../components/detalle-calendario/detalle-calendario.component';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public datalocal: DataLocalService, private modalCtrl: ModalController, private popoverCtrl: PopoverController ) {}

  async abrirRegistro( finicio: string, ffin: string, nombreH: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleCalendarioComponent,
      componentProps: {
        finicio, ffin, nombreH
      }
    });

    console.log(nombreH);
    modal.present();

  }

  async mostrarPop( evento ) {

    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();

    console.log('Padre:', data );

  }

}
