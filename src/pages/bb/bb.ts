import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BbProvider } from '../../providers/bb/bb';
import { DbbPage } from '../dbb/dbb';

@IonicPage()
@Component({
  selector: 'page-bb',
  templateUrl: 'bb.html',
})
export class BbPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public ServidorProvider: BbProvider) {
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
  
    this.navCtrl.push( "DbbPage", { id:id } );
  
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BbPage');
  }

}
