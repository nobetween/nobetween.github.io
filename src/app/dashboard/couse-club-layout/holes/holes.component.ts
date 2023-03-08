import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course, CourseService } from 'src/app/services/course-service';
import { Hole, HoleService } from 'src/app/services/hole-service';

@Component({
	standalone: true,
	selector: 'app-holes',
	templateUrl: './holes.component.html',
	styleUrls: ['./holes.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class HolesComponent implements OnInit
{
	showGrid = true;

	vmCourses: Course[];

	formGroup_multi = new UntypedFormGroup({});
	formGroup_single = new UntypedFormGroup({});

	displayedColumns: string[] = ['action', 'coursename', 'holenum', 'center', 'gpscoord'];
	dataSource: MatTableDataSource<Hole>;
	activeCourse!: Course;

	constructor(public holeService: HoleService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<Hole>();
		this.dataSource.data = this.holeService.getHoleList();

		this.vmCourses = courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup_multi.addControl('CourseName', new UntypedFormControl());
		this.formGroup_multi.addControl('NumOfHoles', new UntypedFormControl());

		this.formGroup_single.addControl('CourseName', new UntypedFormControl());
		this.formGroup_single.addControl('HoleNumber', new UntypedFormControl());
		this.formGroup_single.addControl('HoleName', new UntypedFormControl());
	}

	onSaveMulti_Click()
	{

	}

	onSaveSingle_Click()
	{

	}

	onBack_Click()
	{
		this.showGrid = true;
	}

	onDelete_Click(hole: Hole)
	{
		this.holeService.removeHole(hole);
		this.dataSource.data = this.holeService.getHoleList();
	}

	onAdd_Click()
	{
		this.showGrid = false;
	}
}
