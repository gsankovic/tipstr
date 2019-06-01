import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
import { Team } from '../data/team';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  teamControl = new FormControl('', [Validators.required]);
  teams:Team[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

}
