import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';
import { Game } from '../../data/game';
import { FteamService } from '../../data/fteam.service';
import { Team } from '../../data/team';
import { Tip } from '../../data/tip';
import { Gametips } from '../../data/gametips';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {
  tips: Tip[];
  games: Game[];
  faveGames: Gametips[] = [];
  fTeam: Team;

  constructor(private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.fTeam = this.fteamService.getFaveTeam();
    this.getUpcomingGames();
    this.getTips();
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.setTips(temp); });
  }

  setTips(newTips: Tip[]): void {
    this.tips = newTips;
    this.onSetUpcomingGames();
  }

  getUpcomingGames(): void {
    this.dataService.getUpcomingGames().subscribe(temp => { this.setUpcomingGames(temp); });
  }

  setUpcomingGames(newGames: Game[]): void {
    this.games = newGames;
    this.onSetUpcomingGames();
  }

  onSetUpcomingGames(): void {
    var confidence = 0;

    for (var x in this.tips) {
      for (var i in this.games) {
        if (this.tips[x].gameid == this.games[i].id) {
          if (this.games[i].ateamid == this.fTeam.id || this.games[i].hteamid == this.fTeam.id) {
            if (this.tips[x].tipteamid == this.fTeam.id) {
              confidence = this.tips[x].confidence;
            } else {
              var temp = (100 - this.tips[x].confidence).toFixed(2);
              confidence = parseFloat(temp);
            }
            this.faveGames.push(new Gametips(
              this.fTeam.name, 
              this.fTeam.id, 
              this.games[i].id, 
              this.games[i].is_grand_final, 
              this.games[i].tz, 
              this.games[i].ateam, 
              this.games[i].round, 
              this.games[i].is_final, 
              this.games[i].hteam, 
              this.games[i].ateamid, 
              this.games[i].venue, 
              this.games[i].hteamid, 
              this.games[i].year, 
              this.games[i].date, 
              confidence, 
              this.tips[x].bits, 
              this.tips[x].correct, 
              this.tips[x].tipteamid, 
              this.tips[x].margin, 
              this.tips[x].err, 
              this.tips[x].tip, 
              this.tips[x].source, 
              this.tips[x].sourceid, 
              this.tips[x].hconfidence
              ));
            confidence = 0;
          }
        }
      }
    }
  }
}