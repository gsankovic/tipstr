import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';
import { Game } from '../../data/game';
import { Subscription } from 'rxjs';
import { FteamService } from '../../shared/fteam.service';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.css']
})
export class UpcomingGamesComponent implements OnInit {
  hasFaveTeam = false;
  games: Game[];
  fteamSubscription: Subscription;
  fTeam: string;

  constructor(private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.getSubscription();
    this.getUpcomingGames();
  }

  getSubscription() {
    this.fteamSubscription = this.fteamService.teamChanged.subscribe(
      team => {
        this.fTeam = team.name;
      }
    );
  }

  getUpcomingGames(): void {
    this.dataService.getUpcomingGames().subscribe(temp => { this.games = temp; });
  }
}