import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArrowProvider } from '../../providers/arrow/arrow';
@IonicPage()
@Component({
  selector: 'page-arrow',
  templateUrl: 'arrow.html',
})
export class ArrowPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: ArrowProvider) {
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

    this.navCtrl.push( "DArrowPage", { id:id } );
  
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrowPage');
  }

}
