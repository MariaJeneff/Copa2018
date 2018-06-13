import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaylistsPage } from '../playlists/playlists';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
  providers: [ DeezerServiceProvider ]
})
export class MusicPage {

    public users:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public ds: DeezerServiceProvider) {

                  this.users = [];
                
  }

  goToPlaylists(user){

    this.navCtrl.push(PlaylistsPage, { user: user });
  
  }

  ionViewDidLoad() {
    
    this.ds.getUsers().subscribe( usersIDs => {
      usersIDs.map( userID => {
        this.ds.getUserDetail( userID ).subscribe( user => {
          this.users.push(user);
        });
      });
    });
    // console.log('ionViewDidLoad MusicPage');
  
  }

}
