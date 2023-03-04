import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-fleet-management',
	templateUrl: './fleet-management.component.html',
	styleUrls: ['./fleet-management.component.scss', '../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class FleetManagementComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
