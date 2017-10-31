import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameOverComponent } from './game-over/game-over.component';
import { SuccessComponent } from './success/success.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'game-over',
    component: GameOverComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
