import { Component } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

import * as shuffleArray from 'shuffle-array';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public datalocal: DataLocalService, private localNotifications: LocalNotifications) {}

  registerNotification() {

    const nombres: string[] = [];
    const fechas: string[] = [];

    for (const a of this.datalocal.Nexamen) {
      nombres.push('Examen:' + a.NomExa);
      const copia = new Date (a.Fecha);
      fechas.push(copia.getDate() + '/' + copia.getMonth());
    }

    shuffleArray(nombres).forEach((message, index) => {
      this.localNotifications.schedule({
        id: index,
        title: message,
        text: fechas[index],
        foreground: true,
        trigger: {
          in: 1 + (index * 2),
          unit: ELocalNotificationTriggerUnit.DAY,
        },
      });
    });

  }

}
