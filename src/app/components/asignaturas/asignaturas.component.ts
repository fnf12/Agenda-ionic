import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, ToastController, IonList } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],
})
export class AsignaturasComponent implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;

  @Input() mats;

  Materia = [];

  constructor(private modalCtrl: ModalController, public datalocal: DataLocalService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.materias();
    console.log (this.Materia);
  }

  materias() {
    for (const i of this.mats) {
      if (!(this.Materia.includes(i))) {
        this.Materia.push(i);
      }
    }
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  borrar() {
    this.presentToast('Borrado!');
    this.lista.closeSlidingItems();
  }

}
