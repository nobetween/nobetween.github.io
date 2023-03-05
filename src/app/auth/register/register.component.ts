import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup, FormControl, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserAccount, UserService } from 'src/app/services/user-service';

@Component({
	standalone: true,
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss', '../../app.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule, MatOptionModule],
	encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit
{
	vmAcess = [
		{ label: "Admin", value: "Admin" },
		{ label: "Basic", value: "Basic" },
		{ label: "Manager", value: "Manager" },
		{ label: "Read-Only", value: "Read-Only" }
	];

	formGroup = new UntypedFormGroup({});

	constructor(private router: Router, private userService: UserService) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('ClubCode', new UntypedFormControl());
		this.formGroup.addControl('FirstName', new UntypedFormControl());
		this.formGroup.addControl('LastName', new UntypedFormControl());
		this.formGroup.addControl('PhoneNumber', new UntypedFormControl());
		this.formGroup.addControl('Email', new UntypedFormControl());
		this.formGroup.addControl('Password', new UntypedFormControl());
		this.formGroup.addControl('PasswordConfirm', new UntypedFormControl());
		this.formGroup.addControl('AccessLevel', new UntypedFormControl());
	}

	onCreateAccount_Click()
	{
		let user: UserAccount = {
			id: this.userService.getNewUserID()
			, statuslink: 'Pending Approve/Deny'
			, email: this.formGroup.get(['Email'])?.value
			, firstname: this.formGroup.get(['FirstName'])?.value
			, lastname: this.formGroup.get(['LastName'])?.value
			, phone: this.formGroup.get(['PhoneNumber'])?.value
			, access: this.formGroup.get(['AccessLevel'])?.value
			, status: 'Pending'
			, clubcode: this.formGroup.get(['ClubCode'])?.value
			, password: this.formGroup.get(['Password'])?.value
		}

		this.userService.addUser(user);

		this.router.navigate(['/login']);
	}

	onBack_Click()
	{
		this.router.navigate(['/login']);
	}

}
