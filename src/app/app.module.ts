import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { GamesComponent } from './games/games.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavListComponent } from './navbar/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { TeamsComponent } from './teams/teams.component';
import { PastGamesComponent } from './games/past-games/past-games.component';
import { UpcomingGamesComponent } from './games/upcoming-games/upcoming-games.component';
import { DataServiceService } from './data/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    WelcomeComponent,
    SidenavListComponent,
    ToolbarComponent,
    TeamsComponent,
    PastGamesComponent,
    UpcomingGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
