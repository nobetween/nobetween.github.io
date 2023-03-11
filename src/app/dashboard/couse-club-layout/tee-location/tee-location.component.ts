import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Course, CourseService } from 'src/app/services/course-service';
import { TeeLocation, TeeService } from 'src/app/services/tee-service';

@Component({
	standalone: true,
	selector: 'app-tee-location',
	templateUrl: './tee-location.component.html',
	styleUrls: ['./tee-location.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class TeeLocationComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	vmCourses: Course[];

	displayedColumns: string[] = ['holenum', 'g_a', 'b', 'w', 'g_b', 'r'];
	dataSource: MatTableDataSource<TeeLocation>;

	constructor(public teeService: TeeService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<TeeLocation>();
		this.dataSource.data = this.teeService.getTeeLocations();

		this.vmCourses = courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('CourseName', new UntypedFormControl());
	}

	onFilterCourse_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.teeService.getTeeLocations().filter(tee =>
		{
			return tee.coursename === event.value;
		}
		);
	}

}
