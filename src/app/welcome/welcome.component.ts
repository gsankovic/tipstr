import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
import { Team } from '../data/team';
import { NgForm } from '@angular/forms';
import { FteamService } from '../shared/fteam.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  teams:Team[];

  constructor(private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.getTeams();
    this.fteamService.getTeams();
  }

  onTeamSelection(form: NgForm) {
    this.fteamService.startFteam(form.value.selectTeam);
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

}
