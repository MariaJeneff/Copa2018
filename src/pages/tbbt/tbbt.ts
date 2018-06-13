import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TbbtProvider } from '../../providers/tbbt/tbbt';
import { DtbbtPage } from '../dtbbt/dtbbt';

@IonicPage()
@Component({
  selector: 'page-tbbt',
  templateUrl: 'tbbt.html',
})
export class TbbtPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: TbbtProvider) {
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

  this.navCtrl.push( "DtbbtPage", { id:id } );

}
sort(){
  this.descending = !this.descending;
  this.order = this.descending ? 1 : -1;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TbbtPage');
  }

}
