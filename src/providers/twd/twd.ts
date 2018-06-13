import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class TwdProvider {
  data: any;
  public url  = "https://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes";
  nome : any;
  constructor(public http: Http) {
    console.log('Hello TwdProvider Provider');
  }
  load() {

    if ( this.data ) {

      return Promise.resolve( this.data );
    
    }

    return new Promise( resolve => {
      this.http
        .get(this.url)
        .map( res => res.json() )
        .subscribe( data => {
          this.data = data;
          resolve( this.data );
        });
    });
  }

LoadEpisode( id: number ) {
  
  if ( this.data ) {
    
    return Promise.resolve( this.data );
  
  }

  return new Promise(resolve => {
    this.http
      .get(`http://api.tvmaze.com/episodes/${id}`)
      .map( res => res.json() )
      .subscribe( data => {
        this.data = data;
        resolve( this.data );
      });
  });
}
}
