import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VikingsPage } from './vikings';

@NgModule({
  declarations: [
    VikingsPage,
  ],
  imports: [
    IonicPageModule.forChild(VikingsPage),
  ],
})
export class VikingsPageModule {}
