import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwdProvider } from '../../providers/twd/twd';
import { DtwdPage } from '../dtwd/dtwd';
@IonicPage()
@Component({
  selector: 'page-twd',
  templateUrl: 'twd.html',
})
export class TwdPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: TwdProvider) {
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

    this.navCtrl.push( "DtwdPage", { id:id } );
  
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TwdPage');
  }

}
