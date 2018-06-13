import { Http, RequestOptions, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VercopaPage } from '../vercopa/vercopa';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-copa',
  templateUrl: 'copa.html',
})
export class CopaPage {

  private url:string = "http://localhost:3000/copa";

    public evento = {
      "nome": "",
      "ra": "",
      "re": "",
      "ur": "",
      "ae": "",
      "eu": "",
      "ua": "",
      "ma": "",
      "pe": "",
      "pm": "",
      "ie": "",
      "ipo": "",
      "em": "",
      "fa": "",
      "pd": "",
      "da": "",
      "fp": "",
      "ap": "",
      "df": "",
      "ai": "",
      "cn": "",
      "ac": "",
      "ni": "",
      "na": "",
      "ic": "",
      "cs": "",
      "bs": "",
      "bc": "",
      "ss": "",
      "sb": "",
      "sc": "",
      "am": "",
      "suc": "",
      "cm": "",
      "as": "",
      "ca": "",
      "ms": "",
      "bp": "",
      "ti": "",
      "bt": "",
      "ip": "",
      "ib": "",
      "pt": "",
      "cj": "",
      "ps": "",
      "js": "",
      "pc": "",
      "jp": "",
      "sec": ""
    }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
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
        message: 'Palpite Cadastrada com Sucesso!!!',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      this.navCtrl.push(VercopaPage);
    });
      evento.nome = "",
      evento.ra = "",
      evento.re = "",
      evento.ur = "",
      evento.ae = "",
      evento.eu = "",
      evento.ua = "",
      evento.ma = "",
      evento.pe = "",
      evento.pm = "",
      evento.ie = "",
      evento.ipo = "",
      evento.em = "",
      evento.fa = "",
      evento.pd = "",
      evento.da = "",
      evento.fp = "",
      evento.ap = "",
      evento.df = "",
      evento.ai = "",
      evento.cn = "",
      evento.ac = "",
      evento.ni = "",
      evento.na = "",
      evento.ic = "",
      evento.cs = "",
      evento.bs = "",
      evento.bc = "",
      evento.ss = "",
      evento.sb = "",
      evento.sc = "",
      evento.am = "",
      evento.suc = "",
      evento.cm = "",
      evento.as = "",
      evento.ca = "",
      evento.ms = "",
      evento.bp = "",
      evento.ti = "",
      evento.bt = "",
      evento.ip = "",
      evento.ib = "",
      evento.pt = "",
      evento.cj = "",
      evento.ps = "",
      evento.js = "",
      evento.pc = "",
      evento.jp = "",
      evento.sec = ""
  }
  GoVer(){
    this.navCtrl.push(VercopaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CopaPage');
  }

}
