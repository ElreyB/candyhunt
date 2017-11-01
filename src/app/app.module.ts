import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { routing } from "./app.routing";
import { SuccessComponent } from "./success/success.component";
import { GameOverComponent } from "./game-over/game-over.component";
import { HouseComponent } from "./house/house.component";
import { PlayerService } from "./player.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SuccessComponent,
    GameOverComponent,
    HouseComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
