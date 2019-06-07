import { Injectable } from '@angular/core';
import { Ladder } from './ladder';
import { Game } from './game';
import { FteamService } from './fteam.service';
import { Team } from './team';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class LadderService {

  games = [{"ateamid":10,"hscore":55,"agoals":12,"date":"2019-03-23 16:35:00","winner":"Hawthorn","ascore":87,"hteamid":1,"is_final":0,"ateam":"Hawthorn","tz":"+11:00","year":2019,"round":1,"hgoals":7,"venue":"Adelaide Oval","is_grand_final":0,"hbehinds":13,"id":3056,"updated":"2019-03-23 19:10:02","complete":100,"abehinds":15,"winnerteamid":10,"hteam":"Adelaide"},{"hbehinds":12,"venue":"Gabba","is_grand_final":0,"hgoals":15,"hteam":"Brisbane Lions","winnerteamid":2,"abehinds":10,"complete":100,"updated":"2019-03-23 23:04:02","id":3058,"hteamid":2,"ascore":58,"winner":"Brisbane Lions","date":"2019-03-23 20:20:00","ateamid":17,"agoals":8,"hscore":102,"round":1,"tz":"+11:00","year":2019,"ateam":"West Coast","is_final":0},{"winnerteamid":14,"hteam":"Carlton","abehinds":13,"complete":100,"id":3049,"updated":"2019-03-21 22:06:02","hbehinds":10,"venue":"M.C.G.","is_grand_final":0,"hgoals":9,"round":1,"tz":"+11:00","year":2019,"ateam":"Richmond","is_final":0,"ascore":97,"hteamid":3,"date":"2019-03-21 19:20:00","winner":"Richmond","ateamid":14,"agoals":14,"hscore":64},{"winner":"Geelong","date":"2019-03-22 19:50:00","ateamid":7,"agoals":10,"hscore":65,"ascore":72,"hteamid":4,"is_final":0,"ateam":"Geelong","tz":"+11:00","year":2019,"round":1,"is_grand_final":0,"venue":"M.C.G.","hgoals":9,"hbehinds":11,"updated":"2019-03-22 22:28:03","id":3050,"complete":100,"hteam":"Collingwood","winnerteamid":7,"abehinds":12},{"winner":"Fremantle","date":"2019-03-24 18:20:00","hscore":141,"ateamid":12,"agoals":9,"hteamid":6,"ascore":59,"ateam":"North Melbourne","is_final":0,"round":1,"year":2019,"tz":"+11:00","hbehinds":15,"is_grand_final":0,"venue":"Perth Stadium","hgoals":21,"complete":100,"id":3061,"updated":"2019-03-24 20:56:02","winnerteamid":6,"hteam":"Fremantle","abehinds":5},{"complete":100,"updated":"2019-03-24 17:58:02","id":3060,"winnerteamid":9,"hteam":"Greater Western Sydney","abehinds":10,"hbehinds":16,"is_grand_final":0,"venue":"Sydney Showground","hgoals":16,"ateam":"Essendon","is_final":0,"round":1,"tz":"+11:00","year":2019,"winner":"Greater Western Sydney","date":"2019-03-24 15:20:00","hscore":112,"ateamid":5,"agoals":5,"hteamid":9,"ascore":40},{"ateam":"Port Adelaide","is_final":0,"round":1,"year":2019,"tz":"+11:00","agoals":12,"ateamid":13,"hscore":61,"date":"2019-03-23 13:45:00","winner":"Port Adelaide","hteamid":11,"ascore":87,"complete":100,"updated":"2019-03-23 16:20:02","id":3055,"abehinds":15,"hteam":"Melbourne","winnerteamid":13,"hbehinds":7,"hgoals":9,"is_grand_final":0,"venue":"M.C.G."},{"hgoals":13,"is_grand_final":0,"venue":"Marvel Stadium","hbehinds":7,"id":3059,"updated":"2019-03-24 15:50:02","complete":100,"abehinds":6,"hteam":"St Kilda","winnerteamid":15,"hscore":85,"ateamid":8,"agoals":13,"winner":"St Kilda","date":"2019-03-24 13:10:00","ascore":84,"hteamid":15,"is_final":0,"ateam":"Gold Coast","tz":"+11:00","year":2019,"round":1},{"hbehinds":16,"hgoals":11,"is_grand_final":0,"venue":"Marvel Stadium","complete":100,"id":3057,"updated":"2019-03-23 21:56:02","abehinds":11,"hteam":"Western Bulldogs","winnerteamid":18,"hscore":82,"ateamid":16,"agoals":9,"winner":"Western Bulldogs","date":"2019-03-23 19:25:00","ascore":65,"hteamid":18,"ateam":"Sydney","is_final":0,"round":1,"year":2019,"tz":"+11:00"},{"round":2,"tz":"+11:00","year":2019,"ateam":"St Kilda","is_final":0,"ascore":76,"hteamid":5,"winner":"St Kilda","date":"2019-03-30 16:35:00","hscore":65,"ateamid":15,"agoals":10,"winnerteamid":15,"hteam":"Essendon","abehinds":16,"complete":100,"id":3064,"updated":"2019-03-30 19:08:02","hbehinds":11,"is_grand_final":0,"venue":"Marvel Stadium","hgoals":9},{"year":2019,"tz":"+11:00","round":2,"is_final":0,"ateam":"Melbourne","ascore":46,"hteamid":7,"date":"2019-03-30 19:25:00","winner":"Geelong","hscore":126,"ateamid":11,"agoals":6,"hteam":"Geelong","winnerteamid":7,"abehinds":10,"id":3066,"updated":"2019-03-30 22:08:02","complete":100,"is_grand_final":0,"venue":"Kardinia Park","hgoals":20,"hbehinds":6},{"is_final":0,"ateam":"Fremantle","tz":"+11:00","year":2019,"round":2,"date":"2019-03-31 16:40:00","winner":"Gold Coast","agoals":8,"ateamid":6,"hscore":61,"hteamid":8,"ascore":58,"id":3087,"updated":"2019-03-31 19:14:03","complete":100,"winnerteamid":8,"hteam":"Gold Coast","abehinds":10,"venue":"Carrara","is_grand_final":0,"hgoals":7,"hbehinds":19},{"round":2,"tz":"+11:00","year":2019,"ateam":"Western Bulldogs","is_final":0,"ascore":106,"hteamid":10,"hscore":87,"ateamid":18,"agoals":16,"winner":"Western Bulldogs","date":"2019-03-31 15:20:00","abehinds":10,"hteam":"Hawthorn","winnerteamid":18,"complete":100,"updated":"2019-03-31 17:54:02","id":3069,"hbehinds":9,"hgoals":13,"venue":"M.C.G.","is_grand_final":0},{"id":3068,"updated":"2019-03-31 16:02:02","complete":100,"hteam":"North Melbourne","winnerteamid":2,"abehinds":11,"venue":"Marvel Stadium","is_grand_final":0,"hgoals":13,"hbehinds":9,"is_final":0,"ateam":"Brisbane Lions","year":2019,"tz":"+11:00","round":2,"date":"2019-03-31 13:10:00","winner":"Brisbane Lions","ateamid":2,"agoals":16,"hscore":87,"hteamid":12,"ascore":107},{"hscore":88,"ateamid":3,"agoals":11,"winner":"Port Adelaide","date":"2019-03-30 17:10:00","ascore":72,"hteamid":13,"is_final":0,"ateam":"Carlton","tz":"+11:00","year":2019,"round":2,"hgoals":13,"is_grand_final":0,"venue":"Adelaide Oval","hbehinds":10,"updated":"2019-03-30 20:00:03","id":3065,"complete":100,"abehinds":6,"hteam":"Port Adelaide","winnerteamid":13},{"hbehinds":6,"venue":"M.C.G.","is_grand_final":0,"hgoals":10,"complete":100,"id":3062,"updated":"2019-03-28 21:50:02","winnerteamid":4,"hteam":"Richmond","abehinds":8,"winner":"Collingwood","date":"2019-03-28 19:20:00","ateamid":4,"agoals":17,"hscore":66,"ascore":110,"hteamid":14,"ateam":"Collingwood","is_final":0,"round":2,"year":2019,"tz":"+11:00"},{"round":2,"tz":"+11:00","year":2019,"ateam":"Adelaide","is_final":0,"hteamid":16,"ascore":88,"ateamid":1,"agoals":12,"hscore":62,"winner":"Adelaide","date":"2019-03-29 19:50:00","abehinds":16,"hteam":"Sydney","winnerteamid":1,"complete":100,"id":3063,"updated":"2019-03-29 22:24:03","hbehinds":14,"hgoals":8,"is_grand_final":0,"venue":"S.C.G."},{"hgoals":16,"is_grand_final":0,"venue":"Perth Stadium","hbehinds":8,"updated":"2019-03-30 22:44:02","id":3067,"complete":100,"abehinds":10,"hteam":"West Coast","winnerteamid":17,"agoals":7,"ateamid":9,"hscore":104,"date":"2019-03-30 20:10:00","winner":"West Coast","hteamid":17,"ascore":52,"is_final":0,"ateam":"Greater Western Sydney","tz":"+11:00","year":2019,"round":2},{"is_grand_final":0,"venue":"Adelaide Oval","hgoals":10,"hbehinds":15,"updated":"2019-04-04 22:30:03","id":3088,"complete":100,"winnerteamid":7,"hteam":"Adelaide","abehinds":15,"winner":"Geelong","date":"2019-04-04 19:50:00","ateamid":7,"hscore":75,"agoals":14,"ascore":99,"hteamid":1,"is_final":0,"ateam":"Geelong","year":2019,"tz":"+11:00","round":3},{"hbehinds":11,"hgoals":16,"is_grand_final":0,"venue":"Gabba","abehinds":12,"hteam":"Brisbane Lions","winnerteamid":2,"complete":100,"id":3101,"updated":"2019-04-06 22:14:02","ascore":90,"hteamid":2,"hscore":107,"ateamid":13,"agoals":13,"winner":"Brisbane Lions","date":"2019-04-06 19:25:00","round":3,"year":2019,"tz":"+11:00","ateam":"Port Adelaide","is_final":0},{"is_grand_final":0,"venue":"Marvel Stadium","hgoals":10,"hbehinds":14,"updated":"2019-04-06 16:26:02","id":3099,"complete":100,"hteam":"Carlton","winnerteamid":16,"abehinds":9,"winner":"Sydney","date":"2019-04-06 13:45:00","agoals":14,"ateamid":16,"hscore":74,"hteamid":3,"ascore":93,"is_final":0,"ateam":"Sydney","year":2019,"tz":"+11:00","round":3},{"is_final":0,"ateam":"West Coast","tz":"+11:00","year":2019,"round":3,"ateamid":17,"agoals":15,"hscore":76,"winner":"West Coast","date":"2019-04-06 19:25:00","hteamid":4,"ascore":98,"id":3102,"updated":"2019-04-06 22:00:04","complete":100,"abehinds":8,"hteam":"Collingwood","winnerteamid":17,"hgoals":11,"venue":"M.C.G.","is_grand_final":0,"hbehinds":10},{"is_grand_final":0,"venue":"Perth Stadium","hgoals":11,"hbehinds":5,"updated":"2019-04-07 19:52:03","id":3105,"complete":100,"hteam":"Fremantle","winnerteamid":6,"abehinds":12,"winner":"Fremantle","date":"2019-04-07 17:20:00","ateamid":15,"agoals":9,"hscore":71,"ascore":66,"hteamid":6,"is_final":0,"ateam":"St Kilda","year":2019,"tz":"+10:00","round":3},{"date":"2019-04-06 16:35:00","winner":"Greater Western Sydney","hscore":125,"ateamid":14,"agoals":10,"ascore":76,"hteamid":9,"is_final":0,"ateam":"Richmond","tz":"+11:00","year":2019,"round":3,"is_grand_final":0,"venue":"Sydney Showground","hgoals":19,"hbehinds":11,"updated":"2019-04-06 19:20:03","id":3100,"complete":100,"winnerteamid":9,"hteam":"Greater Western Sydney","abehinds":16},{"hbehinds":9,"venue":"M.C.G.","is_grand_final":0,"hgoals":13,"hteam":"Hawthorn","winnerteamid":10,"abehinds":11,"complete":100,"id":3104,"updated":"2019-04-07 17:56:02","ascore":71,"hteamid":10,"winner":"Hawthorn","date":"2019-04-07 15:20:00","hscore":87,"ateamid":12,"agoals":10,"round":3,"tz":"+10:00","year":2019,"ateam":"North Melbourne","is_final":0},{"winnerteamid":5,"hteam":"Melbourne","abehinds":10,"id":3089,"updated":"2019-04-05 22:38:02","complete":100,"venue":"M.C.G.","is_grand_final":0,"hgoals":18,"hbehinds":4,"year":2019,"tz":"+11:00","round":3,"is_final":0,"ateam":"Essendon","hteamid":11,"ascore":130,"winner":"Essendon","date":"2019-04-05 19:50:00","ateamid":5,"agoals":20,"hscore":112},{"ateamid":8,"hscore":68,"agoals":10,"winner":"Gold Coast","date":"2019-04-07 14:20:00","hteamid":18,"ascore":73,"ateam":"Gold Coast","is_final":0,"round":3,"year":2019,"tz":"+10:00","hbehinds":14,"hgoals":9,"is_grand_final":0,"venue":"Marvel Stadium","complete":100,"id":3103,"updated":"2019-04-07 16:50:02","abehinds":13,"winnerteamid":8,"hteam":"Western Bulldogs"}];
  ladder: Ladder[];
  teams = [{"id":1,"name":"Adelaide","logo":"/wp-content/themes/squiggle/assets/images/Adelaide.jpg","abbrev":"ADE"},{"logo":"/wp-content/themes/squiggle/assets/images/Brisbane.jpg","name":"Brisbane Lions","id":2,"abbrev":"BRI"},{"abbrev":"CAR","logo":"/wp-content/themes/squiggle/assets/images/Carlton.jpg","name":"Carlton","id":3},{"name":"Collingwood","id":4,"logo":"/wp-content/themes/squiggle/assets/images/Collingwood.jpg","abbrev":"COL"},{"id":5,"name":"Essendon","logo":"/wp-content/themes/squiggle/assets/images/Essendon.png","abbrev":"ESS"},{"abbrev":"FRE","name":"Fremantle","id":6,"logo":"/wp-content/themes/squiggle/assets/images/Fremantle.jpg"},{"abbrev":"GEE","logo":"/wp-content/themes/squiggle/assets/images/Geelong.jpg","name":"Geelong","id":7},{"abbrev":"GC","logo":"/wp-content/themes/squiggle/assets/images/GoldCoast.jpg","name":"Gold Coast","id":8},{"abbrev":"GWS","id":9,"name":"Greater Western Sydney","logo":"/wp-content/themes/squiggle/assets/images/Giants.png"},{"logo":"/wp-content/themes/squiggle/assets/images/Hawthorn.jpg","name":"Hawthorn","id":10,"abbrev":"HAW"},{"abbrev":"MEL","logo":"/wp-content/themes/squiggle/assets/images/Melbourne.jpg","name":"Melbourne","id":11},{"id":12,"name":"North Melbourne","logo":"/wp-content/themes/squiggle/assets/images/NorthMelbourne.jpg","abbrev":"NOR"},{"logo":"/wp-content/themes/squiggle/assets/images/PortAdelaide.jpg","id":13,"name":"Port Adelaide","abbrev":"POR"},{"abbrev":"RIC","logo":"/wp-content/themes/squiggle/assets/images/Richmond.jpg","id":14,"name":"Richmond"},{"logo":"/wp-content/themes/squiggle/assets/images/StKilda.jpg","id":15,"name":"St Kilda","abbrev":"STK"},{"abbrev":"SYD","logo":"/wp-content/themes/squiggle/assets/images/Sydney.jpg","id":16,"name":"Sydney"},{"abbrev":"WCE","logo":"/wp-content/themes/squiggle/assets/images/WestCoast.jpg","name":"West Coast","id":17},{"abbrev":"WBD","logo":"/wp-content/themes/squiggle/assets/images/Bulldogs.jpg","id":18,"name":"Western Bulldogs"}] 

  constructor(private dataService: DataServiceService) { }

  calculateLadder() {
    var wPoints = 0, lPoints = 0, wTally = 0, lTally = 0;
    for (var x in this.teams) {
      for (var i in this.games) {
        if (this.games[i].hteamid == this.teams[x].id || this.games[i].ateamid == this.teams[x].id) {
          if (this.games[i].hteamid == this.teams[x].id) {
            wPoints += this.games[i].hscore;
            lPoints += this.games[i].ascore;
            if (this.games[i].winnerteamid == this.teams[x].id) {
              wTally++;
            } else {
              lTally++;
            }
          }
          else if (this.games[i].ateamid == this.teams[x].id) {
            wPoints += this.games[i].ascore;
            lPoints += this.games[i].hscore;
            if (this.games[i].winnerteamid == this.teams[x].id) {
              wTally++;
            } else {
              lTally++;
            }
          }
        }
      }
      var wlPercent = (wPoints / lPoints) * 100;
      console.log(this.teams[x].name, wPoints, lPoints, wTally, lTally, wlPercent);
      wPoints = lPoints = wTally = lTally = wlPercent = 0;
    }
  }


}