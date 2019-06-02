import { Injectable } from '@angular/core';
import { Team } from '../data/team';
import { DataServiceService } from '../data/data-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FteamService {
  teamChanged = new Subject<Team>();
  teams: Team[];
  private faveTeam: Team;

  constructor(private dataService: DataServiceService) { }

  startFteam(selectedId: number) {
    this.faveTeam = this.teams.find(
      t => t.id === selectedId
    );
    this.teamChanged.next({ ...this.faveTeam });
    console.log(this.faveTeam.name);
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }
}
