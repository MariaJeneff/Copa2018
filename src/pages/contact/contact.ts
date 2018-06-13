import { Http, RequestOptions, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContasPage } from '../contas/contas';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  
  private url:string = "http://localhost:3000/dbApp";

    public evento = {
      "nome": "",
      "email": "",
      "sexo": "",
      "senha": ""
    }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: Http,
              public toastCtrl: ToastController) {
  }
  GoCadastrar(evento){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, evento, options)
    .map( res => res.json() )
    .subscribe( data => { 
      let toast = this.toastCtrl.create({
        message: 'Conta Cadastrada com Sucesso!!!',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      this.navCtrl.push(ContasPage);
    });

    evento.nome = "";
    evento.email = "";
    evento.sexo = "";
    evento.senha = "";
  }
  // Alert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Logado',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  contas(){
    this.navCtrl.push(ContasPage);
  }

}
