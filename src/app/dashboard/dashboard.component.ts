import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavService } from '../services/nav-service';
import { UserAccount, UserService } from '../services/user-service';

@Component({
	standalone: true,
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss', '../app.component.scss'],
	imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule, MatExpansionModule],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit
{
	opened = false;
	showIcon = false;

	currentUser: UserAccount;

	currentPage: string = 'HOME';
	routerEvents: any;

	constructor(private router: Router, public appRoutingService: NavService, public userService: UserService)
	{
		this.currentUser = userService.getCurretUser();
	}

	ngOnInit(): void
	{
		this.routerEvents = this.router.events.subscribe((val) =>
		{
			if (val instanceof NavigationEnd)
			{
				this.currentPage = this.appRoutingService.getRouteTitle();
			}
		});
	}

	showMenu() 
	{
		this.opened = true;
	}

	navTo(loc: any) 
	{
		this.opened = false;
		this.appRoutingService.navigateTo(loc);
	}

	onCloseSideNav()
	{
		this.showIcon = false;
	}

	onOpenSideNav()
	{
		this.showIcon = true;
	}
}
