import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from  './app.routing';
import { SuccessComponent } from './success/success.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SuccessComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
