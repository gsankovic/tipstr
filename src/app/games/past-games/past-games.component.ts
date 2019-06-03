import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';
import { Game } from '../../data/game';
import { Subscription } from 'rxjs';
import { FteamService } from '../../shared/fteam.service';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {
  hasFaveTeam = false;
  games: Game[];
  faveGames: Game[] = [];
  fteamSubscription: Subscription;
  fTeam: string;

  constructor(private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.getSubscription();
    this.getPastGames();
  }

  getSubscription() {
    this.fteamSubscription = this.fteamService.teamChanged.subscribe(
      team => {
          this.fTeam = team.name;
      }
    );
  }

  getPastGames(): void {
    this.dataService.getPastGames().subscribe(temp => { this.games = temp; });
  }

  getFTeamGames(fTeam: string, games: Game[]) {
    for (var i = 0; i < this.games.length; i++) {
      if (this.games[i].hteam === this.fTeam || this.games[i].ateam === this.fTeam) {
        this.faveGames.push(this.games[i]);
        console.log(this.games[i])
      }
    }
  }

}
