import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-account-management',
	templateUrl: './account-management.component.html',
	styleUrls: ['./account-management.component.scss', '../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class AccountManagementComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
