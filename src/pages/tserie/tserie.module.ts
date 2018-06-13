import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TseriePage } from './tserie';

@NgModule({
  declarations: [
    TseriePage,
  ],
  imports: [
    IonicPageModule.forChild(TseriePage),
  ],
})
export class TseriePageModule {}
