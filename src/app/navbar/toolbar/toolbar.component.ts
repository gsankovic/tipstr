import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FteamService } from '../../shared/fteam.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  hasFaveTeam = false;
  fteamSubscription: Subscription;
  fTeam: string;

  constructor(private fteamService: FteamService) { }

  ngOnInit() {
    this.getSubscription();
  }

  getSubscription() {
    this.fteamSubscription = this.fteamService.teamChanged.subscribe(
      team => {
        this.fTeam = team.name;
        this.hasFaveTeam = true;
      }
    );
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}
