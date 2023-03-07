import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class NavService
{
    previousNavigation;

    constructor(private router: Router, public route: ActivatedRoute)
    {
        this.previousNavigation = router.getCurrentNavigation()?.previousNavigation;
    }

    navigateTo(loc: string)
    {
        this.router.navigate([loc], { state: { url: loc } });
    }

    public getRouteTitle(): string
    {
        return this.getRouteData('title');
    }

    private getRouteData(data: string): any
    {
        const root = this.router.routerState.snapshot.root;
        return this.lastChild(root).data[data];
    }

    private lastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot
    {
        if (route.firstChild)
        {
            return this.lastChild(route.firstChild);
        } else
        {
            return route;
        }
    }
}