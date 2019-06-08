import { Injectable } from '@angular/core';
import { Team } from './team';
import { DataServiceService } from './data-service.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FteamService {
  teamChanged = new Subject<Team>();
  teams: Team[];
  private faveTeam: Team;
  private faveTeamSelected = false;

  constructor(private dataService: DataServiceService) { 
    this.getTeams();
  }

  startFteam(selectedId: number) {
    this.faveTeam = this.teams.find(t => t.id === selectedId);
    this.teamChanged.next({ ...this.faveTeam });
    this.faveTeamSelected = true;
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  getFaveTeamState() {
    return this.faveTeamSelected;
  }

  getFaveTeam() {
    return { ...this.faveTeam };
  }
}
