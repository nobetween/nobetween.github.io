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
		{ label: "Access 1", value: "Access 1" },
		{ label: "Access 2", value: "Access 2" },
		{ label: "Access 3", value: "Access 3" }
	];

	constructor(private navService: NavService) { }

	ngOnInit(): void
	{
		this.formGroup.addControl('Course', new FormControl());
		this.formGroup.addControl('ClubCode', new FormControl());
		this.formGroup.addControl('AccessLevel', new FormControl());
	}

	onUpdate_Click()
	{
		this.navService.navigateToPreviousURL();
	}

	onAdd_Click()
	{
		this.navService.navigateToPreviousURL();
	}

}
