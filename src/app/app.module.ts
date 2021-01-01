import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SitesComponent } from './board/sites.component';
import { PlayerComponent } from './board/player.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SitesComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
