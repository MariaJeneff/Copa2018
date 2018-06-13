import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbbPage } from './dbb';

@NgModule({
  declarations: [
    DbbPage,
  ],
  imports: [
    IonicPageModule.forChild(DbbPage),
  ],
})
export class DbbPageModule {}
