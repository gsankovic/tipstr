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
  faveGames: Game[];
  fteamSubscription: Subscription;
  fTeam: string;

  constructor(private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.getSubscription();
    this.getPastGames();
    this.faveGames = this.games.filter(
      game => game.hteam === this.fTeam
    );
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

}
