import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-vercopa',
  templateUrl: 'vercopa.html',
})
export class VercopaPage {
  
  private url:string = "http://localhost:3000/copa";
  public dados:Array<{}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
    this.http.get(this.url)
    .map( res => res.json() )
    .subscribe( data => {
      this.dados = data;});
  }
  Delete(id:number){
    this.http.delete(`http://localhost:3000/copa/${id}`)
    .map( res => res.json() )
    .subscribe( data => { 
      let toast = this.toastCtrl.create({
        message: 'Palpite Excluido com Sucesso!!!',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      this.navCtrl.push(VercopaPage);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VercopaPage');
  }

}
