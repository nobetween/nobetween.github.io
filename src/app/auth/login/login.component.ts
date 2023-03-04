import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Form, FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { UserAccount, UserService } from 'src/app/services/user-service';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss', '../../app.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	constructor(private router: Router, public authService: AuthService, public userService: UserService) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Email', new FormControl());
		this.formGroup.addControl('Password', new FormControl());
		this.userService.authenticated = false;
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
		this.userService.authenticatUser(this.formGroup.get(['Email'])?.value, this.formGroup.get(['Password'])?.value)
		if (this.userService.authenticated)
		{
			this.router.navigate(['/home'], { state: { url: '/home' } });
		}
		else
		{

		}
	}
}
