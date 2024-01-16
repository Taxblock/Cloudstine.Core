import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { UserProfileService } from 'app/core/services/user-profile.service';


@Injectable({ providedIn: 'root' })
export class RouteGaurd implements CanActivate 
{
    constructor(private route: Router , private userService : UserProfileService) { }
    canActivate() 
    {
        console.log("Gaurd invoked")
        var userData = this.userService.CurrentUserValue;
        if (userData != null && userData != undefined) 
        {
            console.log("Valid User")
            return true;
        }
        else {
            return false;
        }
        return true;
    }
}  
