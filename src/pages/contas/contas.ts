import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {
  private url:string = "http://localhost:3000/dbApp";
  public dados:Array<{}>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: Http) {

                this.http.get(this.url)
                .map( res => res.json() )
                .subscribe( data => {
                  this.dados = data;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

}
