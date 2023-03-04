import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavService } from 'src/app/services/nav-service';
import { UserService } from 'src/app/services/user-service';

@Component({
	standalone: true,
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss', '../../dashboard.component.scss'],
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	constructor(private navService: NavService, public userService: UserService)
	{

	}

	ngOnInit(): void
	{
		this.formGroup.addControl('FirstName', new FormControl());
		this.formGroup.addControl('LastName', new FormControl());
		this.formGroup.addControl('PhoneNumber', new FormControl());
		this.formGroup.addControl('Email', new FormControl());

		this.formGroup.get(['FirstName'])?.setValue(this.userService.getCurretUser().firstname);
		this.formGroup.get(['LastName'])?.setValue(this.userService.getCurretUser().lastname);
		this.formGroup.get(['PhoneNumber'])?.setValue(this.userService.getCurretUser().phone);
		this.formGroup.get(['Email'])?.setValue(this.userService.getCurretUser().email);
	}

	onSave_Click()
	{
		this.userService.getCurretUser().firstname = this.formGroup.get(['FirstName'])?.value;
		this.userService.getCurretUser().lastname = this.formGroup.get(['LastName'])?.value;
		this.userService.getCurretUser().phone = this.formGroup.get(['PhoneNumber'])?.value;
		this.userService.getCurretUser().email = this.formGroup.get(['Email'])?.value;
		this.navService.navigateToPreviousURL();
	}

}
