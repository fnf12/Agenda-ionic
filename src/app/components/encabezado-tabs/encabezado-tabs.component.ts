import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado-tabs',
  templateUrl: './encabezado-tabs.component.html',
  styleUrls: ['./encabezado-tabs.component.scss'],
})
export class EncabezadoTabsComponent implements OnInit {
  @Input() titulo: string;
  constructor() { }

  ngOnInit() {}

}
