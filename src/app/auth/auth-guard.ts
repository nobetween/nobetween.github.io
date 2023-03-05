import { Injectable } from '@angular/core';
import
{
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { UserService } from '../services/user-service';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router, public userService: UserService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        return this.logInCheck();
    }

    private logInCheck(): boolean
    {
        if (this.userService.isAuthenticated())
        {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
