import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameOverComponent } from './game-over/game-over.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'game-over',
    component: GameOverComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
