import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';
import { Game } from './game';
import{ Tip } from './tip';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  currentYear = (new Date()).getFullYear();

  constructor(private http: HttpClient) { }

  getPastGames() : Observable<Game[]> {
   
    return this.http.get('https://api.squiggle.com.au/?q=games;complete=!0;year=' + this.currentYear ).pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    ); 
  }
  
  getUpcomingGames() : Observable<Game[]> {
   
    return this.http.get('https://api.squiggle.com.au/?q=games;complete=!100;year=' + this.currentYear).pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    ); 
  }

  getTeams() : Observable<Team[]> {
   
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      )))
    );
  }

  getTips() : Observable<Tip[]> {
   
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=' + this.currentYear).pipe(
      map((data: any) => data.tips.map((item: any) => new Tip(
        item.confidence,
        item.bits,
        item.gameid,
        item.ateamid,
        item.venue,
        item.year,
        item.correct,
        item.date,
        item.updated,
        item.hteam,
        item.tipteamid,
        item.margin,
        item.err,
        item.tip,
        item.ateam,
        item.source,
        item.sourceid,
        item.hconfidence,
        item.hteamid,
        item.round
      )))
    );
  }
}
