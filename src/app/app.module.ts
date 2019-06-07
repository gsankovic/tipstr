import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeGuard } from './welcome/welcome.guard';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { GamesComponent } from './games/games.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavListComponent } from './navbar/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
import { PastGamesComponent } from './games/past-games/past-games.component';
import { UpcomingGamesComponent } from './games/upcoming-games/upcoming-games.component';
import { DataServiceService } from './data/data-service.service';
import { FteamService } from './data/fteam.service';
import { LadderService } from './data/ladder.service';
import { H2hComponent } from './h2h/h2h.component';
import { LadderComponent } from './ladder/ladder.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    WelcomeComponent,
    SidenavListComponent,
    ToolbarComponent,
    PastGamesComponent,
    UpcomingGamesComponent,
    H2hComponent,
    LadderComponent
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
  providers: [WelcomeGuard, DataServiceService, FteamService, LadderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
