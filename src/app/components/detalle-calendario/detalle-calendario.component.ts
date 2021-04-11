import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { AsignaturasComponent } from '../asignaturas/asignaturas.component';
import { Eventos } from '../../models/eventos.model';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle-calendario',
  templateUrl: './detalle-calendario.component.html',
  styleUrls: ['./detalle-calendario.component.scss'],
})
export class DetalleCalendarioComponent implements OnInit {

  @Input() finicio: Date;
  @Input() ffin: string;
  @Input() nombreH: string;

  mats = [];

  data =  [
    {
      name: 'Lunes',
      selected: true,
      id: 1
    },
    {
      name: 'Martes',
      selected: false,
      id: 2
    },
    {
      name: 'Miercoles',
      selected: true,
      id: 3
    },
    {
      name: 'Jueves',
      selected: false,
      id: 4
    },
    {
      name: 'Viernes',
      selected: true,
      id: 5
    },
    {
      name: 'Sabado',
      selected: false,
      id: 6
    },
    {
      name: 'Domingo',
      selected: false,
      id: 0
    }
  ];

  collapseCard = '';

  calendario  = {
    locale: 'es-AR'
};

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false,
  };

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;

  viewTitle = '';

  constructor(public datalocal: DataLocalService, private alertCtrl: AlertController, private modalctrl: ModalController) {
  }

  ngOnInit() {
    this.resetEvent();
    for (const asig of this.datalocal.Eventoss) {
      if (asig.desc === this.nombreH ) {
      this.eventSource.push(asig);
      }
    }
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

// Create the right event format and reload source
  addEvent() {
    const dias: number[] = [];

    for (let i = 0; i < 7; i++) {
        if (this.data[i].selected) {
        dias.push(this.data[i].id);
        }
   }

    let fechai = new Date(this.finicio);
    const fechaf = new Date (this.ffin);
    const fechaidos = new Date(this.event.startTime);
    const fechafdos = new Date(this.event.endTime);


    fechai.setHours(fechaidos.getHours());
    fechai.setMinutes(fechaidos.getMinutes());
    fechaf.setHours(fechafdos.getHours());
    fechaf.setMinutes(fechafdos.getMinutes());

    const eventocopia: Eventos[] = [];

    while (fechai.getDate() !== fechaf.getDate()) {

      eventocopia.push( new Eventos(
      this.event.title,
      this.event.desc,
      fechai,
      fechai,
      this.event.allDay));

      const copia = fechai;
      fechai = new Date(copia.getFullYear(),
        copia.getMonth(),
        copia.getDate() + 1,
        copia.getHours(),
        copia.getMinutes());

      }
    eventocopia.push(new Eventos(this.event.title,
        this.event.desc, fechaf, fechaf, this.event.allDay));

    for ( const i of eventocopia ) {
      if (dias.includes(i.startTime.getDay())) {
    this.eventSource.push(i);
    this.datalocal.guardarEvento(i.title, this.nombreH, i.startTime, i.endTime, i.allDay);
      }
    }


    this.myCal.loadEvents();
    this.resetEvent();
    console.log(dias);
    console.log(eventocopia);
  }

  // Change current month/week/day
 next() {
  // tslint:disable-next-line: no-string-literal
  const swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
  console.log(this.datalocal.Eventoss);
}

back() {
  // tslint:disable-next-line: no-string-literal
  const swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}

salir() {
  this.modalctrl.dismiss();
}

async abrirAsignaturas( mats) {

  for (const asig of this.datalocal.Eventoss) {
    if (asig.desc === this.nombreH ) {
    this.mats.push(asig.title);
    }
  }

  const modal = await this.modalctrl.create({
    component: AsignaturasComponent,
    componentProps: {
      mats
    }
  });

  console.log(mats);
  modal.present();

}

// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}

// Focus today
today() {
  this.calendar.currentDate = new Date();
}

// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}

// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  const start = formatDate(event.startTime, 'medium', 'es-AR');
  const end = formatDate(event.endTime, 'medium', 'es-AR');

  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}

// Time slot was clicked
onTimeSelected(ev) {
  const selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

}
