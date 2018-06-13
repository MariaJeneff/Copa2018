import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { Materialize } from 'materialize-css';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { MusicPage } from '../pages/music/music';
import { GaleryPage } from '../pages/galery/galery';
import { SeriePage } from '../pages/serie/serie';
import { ContactPage } from '../pages/contact/contact';
import { PlaylistsPage } from '../pages/playlists/playlists';
import { PlayMusicsPage } from '../pages/play-musics/play-musics';
import { ContasPage } from '../pages/contas/contas';
import { CopaPage } from '../pages/copa/copa';
import { VercopaPage } from '../pages/vercopa/vercopa';
import { TseriePage } from '../pages/tserie/tserie';
import { ArrowPage } from '../pages/arrow/arrow';
import { TwdPage } from '../pages/twd/twd';
import { SnaturalPage } from '../pages/snatural/snatural';
import { VikingsPage } from '../pages/vikings/vikings';
import { SpartacusPage } from '../pages/spartacus/spartacus';
import { BbPage } from '../pages/bb/bb';
import { TbbtPage } from '../pages/tbbt/tbbt';
import { ProgramacaoPage } from '../pages/programacao/programacao';

import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service'; 
import { ServidorproviderProvider } from '../providers/servidorprovider/servidorprovider';
import { ArrowProvider } from '../providers/arrow/arrow';
import { TwdProvider } from '../providers/twd/twd';

import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { SnaturalProvider } from '../providers/snatural/snatural';
import { VikingsProvider } from '../providers/vikings/vikings';
import { SpartacusProvider } from '../providers/spartacus/spartacus';
import { BbProvider } from '../providers/bb/bb';
import { TbbtProvider } from '../providers/tbbt/tbbt';
import { PapelProvider } from '../providers/papel/papel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicPage,
    GaleryPage,
    SeriePage,
    ContactPage,
    PlaylistsPage,
    PlayMusicsPage,
    ContasPage,
    CopaPage,
    VercopaPage,
    TseriePage,
    ArrowPage,
    TwdPage,
    SnaturalPage,
    VikingsPage,
    SpartacusPage,
    BbPage,
    TbbtPage,
    ProgramacaoPage,
    SearchPipe,
    SortPipe

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicPage,
    GaleryPage,
    SeriePage,
    ContactPage,
    PlaylistsPage,
    PlayMusicsPage,
    ContasPage,
    CopaPage,
    VercopaPage,
    TseriePage,
    ArrowPage,
    TwdPage,
    SnaturalPage,
    VikingsPage,
    SpartacusPage,
    BbPage,
    TbbtPage,
    ProgramacaoPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeezerServiceProvider,
    ServidorproviderProvider,
    ArrowProvider,
    TwdProvider,
    SnaturalProvider,
    VikingsProvider,
    VikingsProvider,
    SpartacusProvider,
    BbProvider,
    TbbtProvider,
    PapelProvider
  ]
})
export class AppModule {
}
