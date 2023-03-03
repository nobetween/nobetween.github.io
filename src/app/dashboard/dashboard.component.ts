import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
	standalone: true,
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss', '../app.component.scss'],
	imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit
{
	opened = true;

	constructor() { }

	ngOnInit(): void
	{
	}

	showMenu() 
	{
		this.opened = true;
	}

}
