import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ComponentsModule } from '../../components/components.module';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@NgModule({
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ComponentsModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
