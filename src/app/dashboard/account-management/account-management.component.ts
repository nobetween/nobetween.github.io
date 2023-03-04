import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { UserAccount, UserService } from 'src/app/services/user-service';

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
	formReadOnly = 'false';

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
		{ label: "Admin", value: "Admin" },
		{ label: "Basic", value: "Basic" },
		{ label: "Manager", value: "Manager" },
		{ label: "Read-Only", value: "Read-Only" }
	];


	displayedColumns: string[] = ['statuslink', 'email', 'firstname', 'lastname', 'phone', 'access', 'status'];
	dataSource = this.userService.getUserList();

	activeUserAccount!: UserAccount;

	constructor(public userService: UserService) { }

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

		this.formGroup.get(['FirstName'])?.setValue(userAccount.firstname);
		this.formGroup.get(['LastName'])?.setValue(userAccount.lastname);
		this.formGroup.get(['PhoneNumber'])?.setValue(userAccount.phone);
		this.formGroup.get(['Email'])?.setValue(userAccount.email);
		this.formGroup.get(['AccessLevel'])?.setValue(userAccount.access);

		this.accountEnabled = this.activeUserAccount.status === 'Disabled' ? true : false;
	}

	onAction_Click(action: string)
	{
		switch (action)
		{
			case 'save':
				{
					this.activeUserAccount.firstname = this.formGroup.get(['FirstName'])?.value;
					this.activeUserAccount.lastname = this.formGroup.get(['LastName'])?.value;
					this.activeUserAccount.phone = this.formGroup.get(['PhoneNumber'])?.value;
					this.activeUserAccount.email = this.formGroup.get(['Email'])?.value;
					this.activeUserAccount.access = this.formGroup.get(['AccessLevel'])?.value;
					break;
				}
			case 'disable':
				{

					this.activeUserAccount.status = 'Disabled';
					break;
				}
			case 'enable':
				{
					this.activeUserAccount.status = 'Active';
					break;
				}
		}

		this.userService.updateUser(this.activeUserAccount);
		this.showGrid = true;
	}
}
