import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayMusicsPage } from '../play-musics/play-musics';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [DeezerServiceProvider]
})
export class PlaylistsPage {

  public user: any;
  public playlists: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ds: DeezerServiceProvider) {

                this.user = this.navParams.get('user');
                this.playlists = [];
                console.log(this.user);

              }
    
      goToPlayLists( playlists ){

        this.navCtrl.push(PlayMusicsPage, { playlists: playlists });
    
      }

  ionViewDidLoad() {

    this.ds.getUserPlaylists( this.user.id ).subscribe( data => {
      this.playlists = data.data;
    });
  
  }

}
