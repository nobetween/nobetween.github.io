import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course, CourseService } from 'src/app/services/course-service';
import { Pin, PinService } from 'src/app/services/pin-service';

@Component({
	standalone: true,
	selector: 'app-pin-location',
	templateUrl: './pin-location.component.html',
	styleUrls: ['./pin-location.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class PinLocationComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	vmCourses: Course[];

	displayedColumns: string[] = ['holenum', 'center', 'a', 'b', 'c', 'd', 'e'];
	dataSource: MatTableDataSource<Pin>;

	constructor(public pinService: PinService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<Pin>();
		this.dataSource.data = this.pinService.getPins();

		this.vmCourses = courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('CourseName', new UntypedFormControl());
	}

	onFilterCourse_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.pinService.getPins().filter(pin =>
		{
			return pin.coursename === event.value;
		}
		);
	}

}
