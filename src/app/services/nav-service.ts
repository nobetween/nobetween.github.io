import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth-service";

@Injectable({
    providedIn: 'root'
})
export class NavService
{
    previousNavigation;

    constructor(private router: Router, public authService: AuthService)
    {
        this.previousNavigation = this.router.getCurrentNavigation()?.previousNavigation;
    }

    navigateToPreviousURL()
    {
        const url = this.previousNavigation?.extras?.state?.['url'];
        this.router.navigate([url], { state: { url: url } });
    }

}