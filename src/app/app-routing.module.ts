import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GamesComponent } from './data/games/games.component';
import { TeamsComponent } from './data/teams/teams.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'games', component: GamesComponent},
  { path: 'teams', component: TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
