import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Team } from '../data/team';
import { Game } from '../data/game';
import { Ladder } from '../data/ladder';
import { DataServiceService } from '../data/data-service.service';
import { FteamService } from '../data/fteam.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  dataColumns = ['logo', 'name', 'rank', 'wpoints', 'lpoints', 'wtally', 'ltally', 'wlpercent'];
  dataSource = new MatTableDataSource<Ladder>();

  fTeam: Team;
  teams: Team[];
  games: Game[];
  ladder: Ladder[] = [];
  
  constructor(private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.fTeam = this.fteamService.getFaveTeam();
    this.getPastGames();
    this.getTeams();
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.setTeams(temp); });
  }

  setTeams(newTeams: Team[]): void {
    this.teams = newTeams;
    this.calculateLadder();
  }

  getPastGames(): void {
    this.dataService.getPastGames().subscribe(temp => { this.setPastGames(temp); });
  }

  setPastGames(newGames: Game[]): void {
    this.games = newGames;
    this.calculateLadder();
  }

  calculateLadder(): void {
    var wPoints = 0, lPoints = 0, wTally = 0, lTally = 0;
    if (this.games != null && this.teams != null) {
      for (var x in this.teams) {
        for (var i in this.games) {
          if (this.games[i].hteamid == this.teams[x].id || this.games[i].ateamid == this.teams[x].id) {
            if (this.games[i].hteamid == this.teams[x].id) {
              wPoints += this.games[i].hscore;
              lPoints += this.games[i].ascore;
              if (this.games[i].winnerteamid == this.teams[x].id) {
                wTally++;
              } else {
                lTally++;
              }
            }
            else if (this.games[i].ateamid == this.teams[x].id) {
              wPoints += this.games[i].ascore;
              lPoints += this.games[i].hscore;
              if (this.games[i].winnerteamid == this.teams[x].id) {
                wTally++;
              } else {
                lTally++;
              }
            }
          }
        }
        var wlPercent = (wPoints / lPoints) * 100;
        this.ladder.push(new Ladder(this.teams[x].name, this.teams[x].abbrev, this.teams[x].id, this.teams[x].logo, wPoints, lPoints, wTally, lTally, wlPercent))
        wPoints = lPoints = wTally = lTally = wlPercent = 0;
      }
      this.ladder.sort(function (a, b) {
        const aTally = a.wtally;
        const bTally = b.wtally;
        const aPercent = a.wlpercent;
        const bPercent = b.wlpercent;
      
        let comparison = 0;
        if (aTally < bTally) {
          comparison = 1;
        } else if (aTally > bTally) {
          comparison = -1;
        } else if (aTally == bTally) {
          if (aPercent < bPercent) {
            comparison = 1;
          } else if (aPercent > bPercent) {
            comparison = -1;
          }
        }
        return comparison;
      });

      this.dataSource.data = this.ladder;
    }
  }
}
