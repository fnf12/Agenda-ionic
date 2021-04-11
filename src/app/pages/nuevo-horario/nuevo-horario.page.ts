import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-horario',
  templateUrl: './nuevo-horario.page.html',
  styleUrls: ['./nuevo-horario.page.scss'],
})
export class NuevoHorarioPage implements OnInit {

  horario = {
    nombre: '',
    inicio: '',
    fin: ''
  };

  constructor(private datalocal: DataLocalService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.resetHorario();
  }
  resetHorario() {
    this.horario = {
      nombre: '',
      inicio: new Date().toISOString(),
      fin: new Date().toISOString(),
    };
  }
  onSubmitTemplate() {
    this.presentToast('elemento agregado');
    this.datalocal.guardarRegistroH(this.horario.nombre, this.horario.inicio, this.horario.fin);
  }
  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 800
    });
    toast.present();
  }

}
