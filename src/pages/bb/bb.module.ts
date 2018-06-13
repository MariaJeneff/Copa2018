import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbPage } from './bb';

@NgModule({
  declarations: [
    BbPage,
  ],
  imports: [
    IonicPageModule.forChild(BbPage),
  ],
})
export class BbPageModule {}
