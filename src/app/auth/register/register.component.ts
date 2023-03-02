import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';

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
		{ label: "Access 1", value: "Access 1" },
		{ label: "Access 2", value: "Access 2" },
		{ label: "Access 3", value: "Access 3" }
	];

	formGroup = new UntypedFormGroup({});

	constructor(private router: Router) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('ClubCode', new FormControl());
		this.formGroup.addControl('FirstName', new FormControl());
		this.formGroup.addControl('LastName', new FormControl());
		this.formGroup.addControl('PhoneNumber', new FormControl());
		this.formGroup.addControl('Email', new FormControl());
		this.formGroup.addControl('Password', new FormControl());
		this.formGroup.addControl('PasswordConfirm', new FormControl());
		this.formGroup.addControl('AccessLevel', new FormControl());
	}

	onCreateAccount_Click()
	{
		this.router.navigate(['/login'], { state: {} });
	}

}
