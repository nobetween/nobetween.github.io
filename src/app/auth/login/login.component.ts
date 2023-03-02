import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss', '../../app.component.scss'],
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	constructor(private router: Router) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Email', new FormControl());
		this.formGroup.addControl('Password', new FormControl());
	}

	onRegister_Click()
	{
		this.router.navigate(['/register'], { state: {} });
	}

	onForgotPassword_Click()
	{
		this.router.navigate(['/reset'], { state: {} });
	}

	onLogin_Click()
	{
		this.router.navigate(['/dashboard'], { state: {} });
	}

}
