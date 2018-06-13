import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpartacusPage } from './spartacus';

@NgModule({
  declarations: [
    SpartacusPage,
  ],
  imports: [
    IonicPageModule.forChild(SpartacusPage),
  ],
})
export class SpartacusPageModule {}
