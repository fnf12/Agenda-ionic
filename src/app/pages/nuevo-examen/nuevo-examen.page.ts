import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-examen',
  templateUrl: './nuevo-examen.page.html',
  styleUrls: ['./nuevo-examen.page.scss'],
})
export class NuevoExamenPage implements OnInit {

  examen = {
    nombre: '',
    fecha: ''
  };

  constructor(private datalocal: DataLocalService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.resetHorario();
  }
  resetHorario() {
    this.examen = {
      nombre: '',
      fecha: new Date().toISOString(),
    };
  }
  onSubmitTemplate() {
    this.presentToast('elemento agregado');
    this.datalocal.guardarExamen(this.examen.nombre, this.examen.fecha);
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 800
    });
    toast.present();
  }
}
