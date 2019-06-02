import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Game } from './game';
import { Tip } from './tip';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class DataProcessService {
  games: Game[]
  teams: Team[]
  tips: Tip[]

  


  constructor(private dataService: DataServiceService) { }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp; });
  }

}
