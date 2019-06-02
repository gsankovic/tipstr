import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data/data-service.service';
import { Game } from '../../data/game';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {
  games: Game[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getPastGames();
  }

  getPastGames(): void {
    this.dataService.getPastGames().subscribe(temp => { this.games = temp; });
  }

}
