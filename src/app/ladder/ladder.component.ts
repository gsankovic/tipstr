import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Team } from '../data/team';
import { DataServiceService } from '../data/data-service.service';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  dataColumns = ['logo', 'name', 'id'];
  dataSource = new MatTableDataSource<Team>();

  teams = [{"id":1,"name":"Adelaide","logo":"/wp-content/themes/squiggle/assets/images/Adelaide.jpg","abbrev":"ADE"},{"logo":"/wp-content/themes/squiggle/assets/images/Brisbane.jpg","name":"Brisbane Lions","id":2,"abbrev":"BRI"},{"abbrev":"CAR","logo":"/wp-content/themes/squiggle/assets/images/Carlton.jpg","name":"Carlton","id":3},{"name":"Collingwood","id":4,"logo":"/wp-content/themes/squiggle/assets/images/Collingwood.jpg","abbrev":"COL"},{"id":5,"name":"Essendon","logo":"/wp-content/themes/squiggle/assets/images/Essendon.png","abbrev":"ESS"},{"abbrev":"FRE","name":"Fremantle","id":6,"logo":"/wp-content/themes/squiggle/assets/images/Fremantle.jpg"},{"abbrev":"GEE","logo":"/wp-content/themes/squiggle/assets/images/Geelong.jpg","name":"Geelong","id":7},{"abbrev":"GC","logo":"/wp-content/themes/squiggle/assets/images/GoldCoast.jpg","name":"Gold Coast","id":8},{"abbrev":"GWS","id":9,"name":"Greater Western Sydney","logo":"/wp-content/themes/squiggle/assets/images/Giants.png"},{"logo":"/wp-content/themes/squiggle/assets/images/Hawthorn.jpg","name":"Hawthorn","id":10,"abbrev":"HAW"},{"abbrev":"MEL","logo":"/wp-content/themes/squiggle/assets/images/Melbourne.jpg","name":"Melbourne","id":11},{"id":12,"name":"North Melbourne","logo":"/wp-content/themes/squiggle/assets/images/NorthMelbourne.jpg","abbrev":"NOR"},{"logo":"/wp-content/themes/squiggle/assets/images/PortAdelaide.jpg","id":13,"name":"Port Adelaide","abbrev":"POR"},{"abbrev":"RIC","logo":"/wp-content/themes/squiggle/assets/images/Richmond.jpg","id":14,"name":"Richmond"},{"logo":"/wp-content/themes/squiggle/assets/images/StKilda.jpg","id":15,"name":"St Kilda","abbrev":"STK"},{"abbrev":"SYD","logo":"/wp-content/themes/squiggle/assets/images/Sydney.jpg","id":16,"name":"Sydney"},{"abbrev":"WCE","logo":"/wp-content/themes/squiggle/assets/images/WestCoast.jpg","name":"West Coast","id":17},{"abbrev":"WBD","logo":"/wp-content/themes/squiggle/assets/images/Bulldogs.jpg","id":18,"name":"Western Bulldogs"}] 

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    //this.getTeams();
    console.log(this.teams)
    this.dataSource.data = this.teams;
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

}
