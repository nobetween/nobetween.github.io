import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavService } from 'src/app/services/nav-service';

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

	constructor(private navService: NavService)
	{

	}

	ngOnInit(): void
	{
		this.formGroup.addControl('FirstName', new FormControl());
		this.formGroup.addControl('LastName', new FormControl());
		this.formGroup.addControl('PhoneNumber', new FormControl());
		this.formGroup.addControl('Email', new FormControl());
	}

	onSave_Click()
	{
		this.navService.navigateToPreviousURL();
	}

}
