import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';

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

	constructor(private router: Router)
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
