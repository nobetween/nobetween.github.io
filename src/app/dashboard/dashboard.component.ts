import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss', '../app.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
