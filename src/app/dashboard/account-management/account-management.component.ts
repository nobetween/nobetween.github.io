import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NavService } from 'src/app/services/nav-service';

export interface UserAccount
{
	statuslink: string;
	email: string;
	firstname: string;
	lastname: string;
	phone: string;
	access: string;
	status: string;
}

const USER_DATA: UserAccount[] = [
	{ statuslink: 'Review', email: 'CBriggs84@aol.com', firstname: 'Chris', lastname: 'Briggs', phone: '2039209393', access: 'Admin', status: 'Active' }
	, { statuslink: 'Pending Approve/Deny', email: 'TestMe@aol.com', firstname: 'Test', lastname: 'Me', phone: '4333454545', access: 'Basic', status: 'Disabled' }
];

@Component({
	standalone: true,
	selector: 'app-account-management',
	templateUrl: './account-management.component.html',
	styleUrls: ['./account-management.component.scss', '../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule],
	encapsulation: ViewEncapsulation.None
})
export class AccountManagementComponent implements OnInit
{
	showGrid = true;
	accountEnabled = true;

	activeFilter = 'VIEW ALL USERS';
	accountStatusTxt = '';
	accountStatusBtn = '';

	formGroup = new UntypedFormGroup({});

	vmFilters = [
		{ label: "Filter 1", value: "Filter 1" },
		{ label: "Filter 2", value: "Filter 2" },
		{ label: "Filter 3", value: "Filter 3" },
	];

	vmAcess = [
		{ label: "Access 1", value: "Access 1" },
		{ label: "Access 2", value: "Access 2" },
		{ label: "Access 3", value: "Access 3" }
	];

	displayedColumns: string[] = ['statuslink', 'email', 'firstname', 'lastname', 'phone', 'access', 'status'];
	dataSource = USER_DATA;

	activeUserAccount!: UserAccount;

	constructor(private navService: NavService) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Filter', new FormControl());
		this.formGroup.addControl('FirstName', new FormControl());
		this.formGroup.addControl('LastName', new FormControl());
		this.formGroup.addControl('PhoneNumber', new FormControl());
		this.formGroup.addControl('Email', new FormControl());
		this.formGroup.addControl('AccessLevel', new FormControl());
	}

	onStatus_Click(userAccount: UserAccount)
	{
		this.showGrid = false;
		this.activeUserAccount = userAccount;
		switch (this.activeUserAccount.statuslink)
		{
			case 'Review':
				{
					this.accountStatusTxt = 'ACCOUNT REVIEW';
					this.accountStatusBtn = 'SAVE';
					break;
				}
			case 'Pending Approve/Deny':
				{
					this.accountStatusTxt = 'PENDING ACCOUNT REVIEW';
					this.accountStatusBtn = 'APPROVE';
					break;
				}
		}

		this.accountEnabled = this.activeUserAccount.status === 'Disabled' ? true : false;
	}

	onAction_Click(action: string)
	{
		switch (action)
		{
			case 'save':
				{
					break;
				}
			case 'disable':
				{
					this.activeUserAccount.status = 'Disabled';
					break;
				}
			case 'enable':
				{
					this.activeUserAccount.status = 'Enabled';
					break;
				}
		}
		this.showGrid = true;
	}
}
