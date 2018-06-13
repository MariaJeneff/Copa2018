import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArrowProvider } from '../../providers/arrow/arrow';
import { Episode } from "../model/episode";

@IonicPage()
@Component({
  selector: 'page-d-arrow',
  templateUrl: 'd-arrow.html',
})
export class DArrowPage {
  public id;
  public obg: any;
  public episode: Episode;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ServidorProvider: ArrowProvider) {

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
    console.log('ionViewDidLoad DArrowPage');
  }

}
