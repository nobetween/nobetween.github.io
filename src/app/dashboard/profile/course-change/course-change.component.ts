import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NavService } from 'src/app/services/nav-service';

@Component({
	standalone: true,
	selector: 'app-course-change',
	templateUrl: './course-change.component.html',
	styleUrls: ['./course-change.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule],
	encapsulation: ViewEncapsulation.None
})
export class CourseChangeComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	vmCourse = [
		{ label: "Course 1", value: "Course 1" },
		{ label: "Course 2", value: "Course 2" },
		{ label: "Course 3", value: "Course 3" },
	];

	vmAcess = [
		{ label: "Admin", value: "Admin" },
		{ label: "Basic", value: "Basic" },
		{ label: "Manager", value: "Manager" },
		{ label: "Read-Only", value: "Read-Only" }
	];

	constructor() { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Course', new FormControl());
		this.formGroup.addControl('ClubCode', new FormControl());
		this.formGroup.addControl('AccessLevel', new FormControl());
	}

	onUpdate_Click()
	{

	}

	onAdd_Click()
	{

	}

}
