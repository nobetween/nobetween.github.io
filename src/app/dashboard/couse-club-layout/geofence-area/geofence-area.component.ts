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
import { GeofenceArea, GeofenceService, GeofenceType } from 'src/app/services/geofence-service';
import { Hole, HoleService } from 'src/app/services/hole-service';

@Component({
	standalone: true,
	selector: 'app-geofence-area',
	templateUrl: './geofence-area.component.html',
	styleUrls: ['./geofence-area.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule],
	encapsulation: ViewEncapsulation.None
})
export class GeofenceAreaComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	showGrid = true;

	vmCourses: Course[];
	vmHoles: Hole[];
	vmGeofenceTypes: GeofenceType[];

	displayedColumns: string[] = ['action', 'edit', 'geofencetype'];
	dataSource: MatTableDataSource<GeofenceArea>;

	activeGeofenceArea!: GeofenceArea;

	constructor(public geofenceService: GeofenceService, public holeService: HoleService, public courseService: CourseService)
	{
		this.dataSource = new MatTableDataSource<GeofenceArea>();
		this.dataSource.data = this.geofenceService.getGeofenceAreas();

		this.vmCourses = courseService.getCourseList();
		this.vmHoles = holeService.getHoleList();
		this.vmGeofenceTypes = geofenceService.getGeofenceTypes();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('CourseNameFilter', new UntypedFormControl());
		this.formGroup.addControl('HoleNumberFilter', new UntypedFormControl());
		this.formGroup.addControl('GeofenceType', new UntypedFormControl());
		this.formGroup.addControl('HoleNumber', new UntypedFormControl());
		this.formGroup.addControl('CourseName', new UntypedFormControl());
	}

	onFilterCourse_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.geofenceService.getGeofenceAreas().filter(area =>
		{
			return area.coursename === event.value;
		}
		);
	}

	onFilterHole_Change(event: MatSelectChange)
	{
		this.dataSource.data = this.geofenceService.getGeofenceAreas().filter(area =>
		{
			return area.holenum === event.value;
		}
		);
	}

	onSave_Click()
	{
		if (this.activeGeofenceArea.id > -1)
		{
			this.activeGeofenceArea.geofencetype = this.formGroup.get(['GeofenceType'])?.value;
			this.activeGeofenceArea.holenum = this.formGroup.get(['HoleNumber'])?.value;
			this.activeGeofenceArea.coursename = this.formGroup.get(['CourseName'])?.value;

			this.geofenceService.updateGeofenceArea(this.activeGeofenceArea);
		}
		else
		{
			this.activeGeofenceArea = {
				id: this.geofenceService.getNewGeofenceAreaID()
				, geofencetype: this.formGroup.get(['GeofenceType'])?.value
				, holenum: this.formGroup.get(['HoleNumber'])?.value
				, coursename: this.formGroup.get(['CourseName'])?.value
			}
			this.geofenceService.addGeofenceArea(this.activeGeofenceArea);
		}

		this.showGrid = true;
	}

	onBack_Click()
	{
		this.showGrid = true;
	}

	onDelete_Click(geofenceArea: GeofenceArea)
	{
		this.geofenceService.removeGeofenceArea(geofenceArea);
		this.dataSource.data = this.geofenceService.getGeofenceAreas();
	}

	onEdit_Click(geofenceArea: GeofenceArea)
	{
		this.showGrid = false;
		this.activeGeofenceArea = geofenceArea;

		this.formGroup.get(['CourseName'])?.setValue(geofenceArea.coursename);
		this.formGroup.get(['HoleNumber'])?.setValue(geofenceArea.holenum);
		this.formGroup.get(['GeofenceType'])?.setValue(geofenceArea.geofencetype);
	}

	onAdd_Click()
	{
		this.showGrid = false;
		this.activeGeofenceArea = { id: -1, coursename: '', holenum: 0, geofencetype: '' };
		this.formGroup.get(['CourseName'])?.setValue(this.activeGeofenceArea.coursename);
		this.formGroup.get(['HoleNumber'])?.setValue(this.activeGeofenceArea.holenum);
		this.formGroup.get(['GeofenceType'])?.setValue(this.activeGeofenceArea.geofencetype);
	}

}
