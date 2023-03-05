import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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

	constructor(private router: Router, public userService: UserService, public route: ActivatedRoute)
	{
		this.currentUser = userService.getCurretUser();
	}

	ngOnInit(): void
	{
	}

	showMenu() 
	{
		this.opened = true;
	}

	navTo(loc: any) 
	{
		this.route.snapshot.routeConfig?.children?.forEach(child =>
		{
			//console.log('child', child)
			//console.log('loc', loc)
			if (child.path === loc)
			{
				console.log('title', child.data?.['title'])
				this.currentPage = child.data?.['title'] as string;
			}
		});
		this.opened = false;
		this.router.navigate([loc]);
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
