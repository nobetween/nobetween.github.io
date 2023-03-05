import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { UserService } from 'src/app/services/user-service';

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
		this.formGroup.addControl('Email', new UntypedFormControl());
		this.formGroup.addControl('Password', new UntypedFormControl());
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
		if (this.userService.authenticatUser(this.formGroup.get(['Email'])?.value, this.formGroup.get(['Password'])?.value))
		{
			this.router.navigate(['/home'], { state: { url: '/home' } });
		}
		else
		{

		}
	}
}
