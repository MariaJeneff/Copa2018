import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServidorproviderProvider } from '../../providers/servidorprovider/servidorprovider';
import { Episode } from "../model/episode";

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public id;
  public obg: any;
  public episode: Episode;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ServidorProvider: ServidorproviderProvider) {

                this.id = navParams.get("id");
                this.episode = new Episode();

                  this.ServidorProvider.LoadEpisode( this.id ).then( data => {
                  this.obg = data;
                  this.episode.name = this.obg.name;
                  this.episode.airdate = this.obg.airdate;
                  this.episode.summary = this.obg.summary;
                  this.episode.thumb = this.obg.image.original;
                  console.log( this.episode );
                });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
