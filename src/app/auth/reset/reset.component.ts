import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-reset',
	templateUrl: './reset.component.html',
	styleUrls: ['./reset.component.scss', '../../app.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class ResetComponent implements OnInit
{

	formGroup = new UntypedFormGroup({});

	constructor(private router: Router) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Email', new FormControl());
	}

	onResetPassword_Click()
	{
		this.router.navigate(['/login'], { state: {} });
	}

}
