import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FteamService } from '../data/fteam.service';

@Injectable()
export class WelcomeGuard implements CanActivate {

    constructor(private fteamService: FteamService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.fteamService.getFaveTeamState()) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
        
    }
}