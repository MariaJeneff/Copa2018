import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SnaturalProvider } from '../../providers/snatural/snatural';
import { DsnaturalPage } from '../dsnatural/dsnatural';
@IonicPage()
@Component({
  selector: 'page-snatural',
  templateUrl: 'snatural.html',
})
export class SnaturalPage {
  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: SnaturalProvider) {
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
        
            this.navCtrl.push( "DsnaturalPage", { id:id } );
          
          }
          sort(){
            this.descending = !this.descending;
            this.order = this.descending ? 1 : -1;
          }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SnaturalPage');
  }

}
