import { Injectable } from '@angular/core';
import
{
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth-service';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router, public authService: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        return this.logInCheck();
    }

    private logInCheck(): boolean
    {
        if (this.authService.authenticated)
        {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
