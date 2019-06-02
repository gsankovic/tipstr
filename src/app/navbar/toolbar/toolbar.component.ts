import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FteamService } from '../../shared/fteam.service';
import { Team } from '../../data/team';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  hasFaveTeam = false;
  fteamSubscription: Subscription;
  team: Team;

  constructor(private fteamService: FteamService) { }

  ngOnInit() {
    this.getSubscription();
  }

  getSubscription() {
    this.fteamSubscription = this.fteamService.teamChanged.subscribe(
      team => {
        this.team = team;
      }
    );
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
