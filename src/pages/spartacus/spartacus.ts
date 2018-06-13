import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpartacusProvider } from '../../providers/spartacus/spartacus';
import { DspartacusPage } from '../dspartacus/dspartacus';
@IonicPage()
@Component({
  selector: 'page-spartacus',
  templateUrl: 'spartacus.html',
})
export class SpartacusPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: SpartacusProvider) {
                this.LoadAll();
}
LoadAll() {
      
  this.ServidorProvider.load()
    .then( data => {
      this.obj = data;
      this.result = this.obj._embedded.episodes;
    });

}
getDetail( id:number ){

  this.navCtrl.push( "DspartacusPage", { id:id } );

}
sort(){
  this.descending = !this.descending;
  this.order = this.descending ? 1 : -1;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpartacusPage');
  }

}
