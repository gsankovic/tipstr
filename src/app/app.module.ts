import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { TeamsComponent } from './data/teams/teams.component';
import { GamesComponent } from './data/games/games.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavListComponent } from './navbar/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    GamesComponent,
    WelcomeComponent,
    SidenavListComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
