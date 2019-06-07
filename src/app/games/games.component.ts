import { Component, OnInit } from '@angular/core';
import { Game } from '../data/game';
import { DataServiceService } from '../data/data-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getPastGames();
    this.printGames();
  }

  setGames(newGames: Game[]): void {
    this.games = newGames;
    this.dataService.setGames(this.games);
  }

  getPastGames(): void {
    this.dataService.getPastGames().subscribe(temp => { this.setGames(temp); });
  }

  printGames() {
    console.log(this.games[0].winnerteamid);
  }
}
