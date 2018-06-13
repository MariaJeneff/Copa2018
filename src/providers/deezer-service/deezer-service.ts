import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class DeezerServiceProvider {

  public deezerAPI: string;

  constructor(public http: Http) {

    // this.deezerAPI = "https://api.deezer.com/";
    this.deezerAPI = "/deezerAPI/";
    // console.log('Hello DeezerServiceProvider Provider');
  
  }

  getUsers(){

      return this.http.get('https://api.myjson.com/bins/mcjrb')
      .map( res => res.json() )

  }

  getUserDetail( userID ){

      return this.http.get( this.deezerAPI + "user/" + userID)
      .map( res => res.json() )
    
  }

  getUserPlaylists( userID ){

    return this.http.get( this.deezerAPI + "user/" + userID + "/playlists")
    .map( res => res.json() )

  }

  getPlayListsMusics( playlistID ){

    return this.http.get( this.deezerAPI + "playlist/" + playlistID + "/tracks")
    .map( res => res.json() )

  }

}
