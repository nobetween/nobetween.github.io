import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course, CourseService } from 'src/app/services/course-service';

@Component({
	standalone: true,
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule],
	encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit
{
	showGrid = true;

	formGroup = new UntypedFormGroup({});

	displayedColumns: string[] = ['action', 'coursename', 'numholes'];
	dataSource: MatTableDataSource<Course>;//(this.courseService.getCourseList());
	activeCourse!: Course;

	constructor(public courseService: CourseService, private changeDetectorRefs: ChangeDetectorRef)
	{
		this.dataSource = new MatTableDataSource<Course>();
		this.dataSource.data = this.courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('CourseName', new UntypedFormControl());
		this.formGroup.addControl('NumOfHoles', new UntypedFormControl());
	}

	onSave_Click()
	{
		if (this.activeCourse.id > -1)
		{
			this.activeCourse.coursename = this.formGroup.get(['CourseName'])?.value;
			this.activeCourse.numholes = this.formGroup.get(['NumOfHoles'])?.value;

			this.courseService.updateCourse(this.activeCourse);
		}
		else
		{
			this.activeCourse = { id: this.courseService.getNewCourseID(), coursename: this.formGroup.get(['CourseName'])?.value, numholes: this.formGroup.get(['NumOfHoles'])?.value }
			this.courseService.addCourse(this.activeCourse);
		}

		this.showGrid = true;
	}

	onBack_Click()
	{
		this.showGrid = true;
	}

	onDelete_Click(course: Course)
	{
		this.courseService.removeCourse(course);
		this.dataSource.data = this.courseService.getCourseList();
	}

	onEdit_Click(course: Course)
	{
		this.showGrid = false;
		this.activeCourse = course;

		this.formGroup.get(['CourseName'])?.setValue(course.coursename);
		this.formGroup.get(['NumOfHoles'])?.setValue(course.numholes);
	}

	onAdd_Click()
	{
		this.showGrid = false;
		this.activeCourse = { id: -1, coursename: '', numholes: 0 };
		this.formGroup.get(['CourseName'])?.setValue(this.activeCourse.coursename);
		this.formGroup.get(['NumOfHoles'])?.setValue(this.activeCourse.numholes);
	}

}
