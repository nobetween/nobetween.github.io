import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Course, CourseService } from 'src/app/services/course-service';
import { Tee, TeeService } from 'src/app/services/tee-service';

@Component({
	standalone: true,
	selector: 'app-tees',
	templateUrl: './tees.component.html',
	styleUrls: ['./tees.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class TeesComponent implements OnInit
{
	showGrid = true;

	formGroup = new UntypedFormGroup({});

	vmCourses: Course[];

	displayedColumns: string[] = ['action', 'edit', 'teeboxid', 'color'];
	dataSource: MatTableDataSource<Tee>;
	activeTee!: Tee;

	constructor(public teeService: TeeService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<Tee>();
		this.dataSource.data = this.teeService.getTees();

		this.vmCourses = courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('TeeBoxID', new UntypedFormControl());
		this.formGroup.addControl('Color', new UntypedFormControl());
		this.formGroup.addControl('CourseName', new UntypedFormControl());
	}

	onSave_Click()
	{
		this.activeTee = {
			id: this.teeService.getNewTeeID()
			, teebox_id: this.formGroup.get(['TeeBoxID'])?.value
			, color: this.formGroup.get(['Color'])?.value
			, enabled: true
			, coursename: this.formGroup.get(['CourseName'])?.value
		}

		this.teeService.addTee(this.activeTee);
		this.showGrid = true;
	}

	onBack_Click()
	{
		this.showGrid = true;
	}

	onDelete_Click(tee: Tee)
	{
		this.teeService.removeCourse(tee);
		this.dataSource.data = this.teeService.getTees();
	}

	onEdit_Click(tee: Tee)
	{
		tee.enabled = !tee.enabled;
	}

	onAdd_Click()
	{
		this.showGrid = false;
		this.activeTee = { id: -1, teebox_id: 0, color: '', enabled: false, coursename: '' };
		this.formGroup.get(['TeeBoxID'])?.setValue(this.activeTee.teebox_id);
		this.formGroup.get(['Color'])?.setValue(this.activeTee.color);
	}

	onFilterCourse_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.teeService.getTees().filter(tee =>
		{
			return tee.coursename === event.value;
		}
		);
	}
}
