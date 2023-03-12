import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ApproachService, ApproachShot } from 'src/app/services/approach-service';
import { Course, CourseService } from 'src/app/services/course-service';

@Component({
	standalone: true,
	selector: 'app-approach-shot',
	templateUrl: './approach-shot.component.html',
	styleUrls: ['./approach-shot.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class ApproachShotComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	vmCourses: Course[];

	displayedColumns: string[] = ['holenum', 'par', 'approachshot'];
	dataSource: MatTableDataSource<ApproachShot>;

	constructor(public approachService: ApproachService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<ApproachShot>();
		this.dataSource.data = this.approachService.getApproachShots();

		this.vmCourses = courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('CourseName', new UntypedFormControl());
	}

	onFilterCourse_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.approachService.getApproachShots().filter(approachShot =>
		{
			return approachShot.coursename === event.value;
		}
		);
	}

}
