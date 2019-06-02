import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GamesComponent } from './games/games.component';
import { TeamsComponent } from './teams/teams.component';
import { H2hComponent } from './h2h/h2h.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'head', component: H2hComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
