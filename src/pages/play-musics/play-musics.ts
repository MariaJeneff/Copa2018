import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

@IonicPage()
@Component({
  selector: 'page-play-musics',
  templateUrl: 'play-musics.html',
  providers: [ DeezerServiceProvider ]
})
export class PlayMusicsPage {

  public playlist: any;
  public musics: any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ds: DeezerServiceProvider) {
              
                this.playlist = this.navParams.get('playlist');
                this.musics = [];

  }

  ionViewDidLoad() {

    this.ds.getPlayListsMusics( this.playlist.id ).subscribe( data => {
      this.musics = data.data;
    });
  
  }

}
