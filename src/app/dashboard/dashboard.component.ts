import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../services/auth-service';

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

	constructor(private router: Router, public authService: AuthService)
	{

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
		this.router.navigate([loc], { state: {} });
	}
}
