import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriePage } from '../serie/serie';
import { ArrowPage } from '../arrow/arrow';
import { TwdPage } from '../twd/twd';
import { SnaturalPage } from '../snatural/snatural';
import { VikingsPage } from '../vikings/vikings';
import { SpartacusPage } from '../spartacus/spartacus';
import { BbPage } from '../bb/bb';
import { TbbtPage } from '../tbbt/tbbt';
@IonicPage()
@Component({
  selector: 'page-tserie',
  templateUrl: 'tserie.html',
})
export class TseriePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  getGrey(){
    this.navCtrl.push(SeriePage);
  }
  getArrow(){
    this.navCtrl.push(ArrowPage);
  }
  getTWD(){
    this.navCtrl.push(TwdPage);
  }
  getSNatural(){
    this.navCtrl.push(SnaturalPage);
  }
  getVikings(){
    this.navCtrl.push(VikingsPage);
  }
  getSpartacus(){
    this.navCtrl.push(SpartacusPage);
  }
  getBB(){
    this.navCtrl.push(BbPage);
  }
  getTBBT(){
    this.navCtrl.push(TbbtPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TseriePage');
  }

}
