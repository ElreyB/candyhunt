import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { GameOverComponent } from "./game-over/game-over.component";
import { SuccessComponent } from "./success/success.component";
import { HouseComponent } from "./house/house.component";

const appRoutes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "game-over",
    component: GameOverComponent
  },
  {
    path: "success",
    component: SuccessComponent
  },
  {
    path: "house/:id",
    component: HouseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
