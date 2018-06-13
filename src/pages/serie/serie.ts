import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorproviderProvider } from '../../providers/servidorprovider/servidorprovider';

@IonicPage()
@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public ServidorProvider: ServidorproviderProvider) {

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

      this.navCtrl.push( "DetailsPage", { id:id } );
    
    }
    sort(){
      this.descending = !this.descending;
      this.order = this.descending ? 1 : -1;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriePage');
  }

}
