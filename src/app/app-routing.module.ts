import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GamesComponent } from './games/games.component';
import { LadderComponent } from './ladder/ladder.component';
import { H2hComponent } from './h2h/h2h.component';
import { WelcomeGuard } from './welcome/welcome.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'games', component: GamesComponent, canActivate: [WelcomeGuard] },
  { path: 'ladder', component: LadderComponent, canActivate: [WelcomeGuard] },
  { path: 'head', component: H2hComponent, canActivate: [WelcomeGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
