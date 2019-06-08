import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
import { Team } from '../data/team';
import { NgForm } from '@angular/forms';
import { FteamService } from '../data/fteam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  selectedTeam = false;
  teams: Team[];

  constructor(private router: Router, private dataService: DataServiceService, private fteamService: FteamService) { }

  ngOnInit() {
    this.getTeams();
    this.dataService.getTips();
  }

  onTeamSelection(form: NgForm) {
    this.fteamService.startFteam(form.value.selectTeam);
    this.router.navigate(['/games']);
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

}
