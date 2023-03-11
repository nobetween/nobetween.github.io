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
import { Scoresheet, ScoresheetService } from 'src/app/services/scoresheet-service';

@Component({
	standalone: true,
	selector: 'app-scoresheet',
	templateUrl: './scoresheet.component.html',
	styleUrls: ['./scoresheet.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class ScoresheetComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	vmCourses: Course[];

	readonly: boolean = false;

	displayedColumns: string[] = ['info', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'out', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'in', 'total'];
	dataSource: MatTableDataSource<Scoresheet>;

	constructor(public scoresheetService: ScoresheetService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<Scoresheet>();
		this.dataSource.data = this.scoresheetService.getScoresheet();

		this.vmCourses = courseService.getCourseList();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('CourseName', new UntypedFormControl());
	}

	onSave_Click()
	{
		this.readonly = false;
	}

	onBack_Click()
	{
		this.readonly = true;
	}

	onFilterCourse_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.scoresheetService.getScoresheet().filter(scoresheet =>
		{
			return scoresheet.coursename === event.value;
		}
		);
	}

}
