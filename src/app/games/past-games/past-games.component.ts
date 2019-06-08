import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';
import { Game } from '../../data/game';
import { FteamService } from '../../data/fteam.service';
import { Team } from '../../data/team';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {

  fTeam: Team;

  games: Game[];
  faveGames: Game[] = [];

  constructor(private fteamService: FteamService, private dataService: DataServiceService) { }

  ngOnInit() {
    this.fTeam = this.fteamService.getFaveTeam();
    this.getPastGames();
  }

  setGames(newGames: Game[]): void {
    this.games = newGames;
    this.onSetGames();
  }

  getPastGames(): void {
    this.dataService.getPastGames().subscribe(temp => { this.setGames(temp); });
  }

  onSetGames(): void {
    for (var i in this.games) {
      if (this.games[i].hteamid == this.fTeam.id || this.games[i].ateamid == this.fTeam.id) {
        this.faveGames.push(this.games[i]);
      }
    }
  }

}
