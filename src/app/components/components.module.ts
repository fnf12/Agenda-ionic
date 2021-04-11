import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { EncabezadoTabsComponent } from './encabezado-tabs/encabezado-tabs.component';
import { DetalleCalendarioComponent } from './detalle-calendario/detalle-calendario.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { FormsModule } from '@angular/forms';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { PopinfoComponent } from './popinfo/popinfo.component';

@NgModule({
  entryComponents: [
    DetalleCalendarioComponent,
    AsignaturasComponent
  ],
  declarations: [
    EncabezadoComponent,
    EncabezadoTabsComponent,
    DetalleCalendarioComponent,
    AsignaturasComponent,
    PopinfoComponent
  ],
  exports: [
  EncabezadoComponent,
  EncabezadoTabsComponent,
  DetalleCalendarioComponent,
  AsignaturasComponent,
  PopinfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
  ]
})
export class ComponentsModule { }
