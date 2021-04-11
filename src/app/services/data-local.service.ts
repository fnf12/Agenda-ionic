import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { Eventos } from '../models/eventos.model';
import { Examenes } from '../models/examenes.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  Eventoss: Eventos[] = [];
  Hguardados: Registro[] = [];
  Nexamen: Examenes[] = [];

  constructor(private storage: Storage) {
    // cargar registros
    this.cargarStorage();

   }

   async cargarStorage() {
    this.Hguardados = await this.storage.get('registros') || [];
    this.Eventoss = await this.storage.get('eventitos') || [];
    this.Nexamen = await this.storage.get('examenes') || [];
   }

  async guardarRegistroH(NomH: string, Ini: string, Fin: string) {
    await this.cargarStorage;
    const nuevoRegistro = new Registro(NomH, Ini, Fin);
    this.Hguardados.unshift( nuevoRegistro );
    console.log(this.Hguardados);
    this.storage.set('registros', this.Hguardados);
  }

  async guardarEvento(nombre: string, comentario: string, hinicio: Date, hfin: Date, tdia: boolean) {
    await this.cargarStorage;
    const nuevoEvento = new Eventos(nombre, comentario, hinicio, hfin, tdia);
    this.Eventoss.unshift( nuevoEvento );
    console.log(this.Eventoss);
    this.storage.set('eventitos', this.Eventoss);
  }

  async guardarExamen(nombre: string, fecha: string) {
    await this.cargarStorage;
    const nuevoExamen = new Examenes(nombre, fecha);
    this.Nexamen.unshift( nuevoExamen );
    console.log(this.Nexamen);
    this.storage.set('examenes', this.Nexamen);
  }

}
