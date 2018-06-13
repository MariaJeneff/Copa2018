import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VikingsProvider } from '../../providers/vikings/vikings';
import { DvikingsPage } from '../dvikings/dvikings';
@IonicPage()
@Component({
  selector: 'page-vikings',
  templateUrl: 'vikings.html',
})
export class VikingsPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: VikingsProvider) {
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

    this.navCtrl.push( "DvikingsPage", { id:id } );
  
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VikingsPage');
  }

}
