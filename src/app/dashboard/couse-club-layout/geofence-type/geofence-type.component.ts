import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { GeofenceService, GeofenceType } from 'src/app/services/geofence-service';

@Component({
	standalone: true,
	selector: 'app-geofence-type',
	templateUrl: './geofence-type.component.html',
	styleUrls: ['./geofence-type.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule,],
	encapsulation: ViewEncapsulation.None
})
export class GeofenceTypeComponent implements OnInit
{
	formGroup = new UntypedFormGroup({});

	showGrid = true;

	vmPermanent: any = [
		{ value: 'YES' }
		, { value: 'NO' }
	];

	displayedColumns: string[] = ['action', 'edit', 'typeid', 'geofencetype', 'permanent'];
	dataSource: MatTableDataSource<GeofenceType>;
	activeGeofenceType!: GeofenceType;

	constructor(public geofenceService: GeofenceService)
	{
		this.dataSource = new MatTableDataSource<GeofenceType>();
		this.dataSource.data = this.geofenceService.getGeofenceTypes();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('GeofenceType', new UntypedFormControl());
		this.formGroup.addControl('Permanent', new UntypedFormControl());
	}

	onSave_Click()
	{
		if (this.activeGeofenceType.id > -1)
		{
			this.activeGeofenceType.geofencetype = this.formGroup.get(['GeofenceType'])?.value;
			this.activeGeofenceType.permanent = this.formGroup.get(['Permanent'])?.value;

			this.geofenceService.updateGeofenceType(this.activeGeofenceType);
		}
		else
		{
			this.activeGeofenceType = {
				id: this.geofenceService.getNewGeofenceID(), typeid: this.geofenceService.getNewGeofenceTypeID()
				, geofencetype: this.formGroup.get(['GeofenceType'])?.value, permanent: this.formGroup.get(['Permanent'])?.value
			}
			this.geofenceService.addGeofenceType(this.activeGeofenceType);
		}

		this.showGrid = true;
	}

	onBack_Click()
	{
		this.showGrid = true;
	}

	onDelete_Click(geofenceType: GeofenceType)
	{
		this.geofenceService.removeGeofenceType(geofenceType);
		this.dataSource.data = this.geofenceService.getGeofenceTypes();
	}

	onEdit_Click(geofenceType: GeofenceType)
	{
		this.showGrid = false;
		this.activeGeofenceType = geofenceType;

		this.formGroup.get(['GeofenceType'])?.setValue(geofenceType.geofencetype);
		this.formGroup.get(['Permanent'])?.setValue(geofenceType.permanent);
	}

	onAdd_Click()
	{
		this.showGrid = false;
		this.activeGeofenceType = { id: -1, typeid: -1, geofencetype: '', permanent: 'No' };
		this.formGroup.get(['GeofenceType'])?.setValue(this.activeGeofenceType.geofencetype);
		this.formGroup.get(['Permanent'])?.setValue(this.activeGeofenceType.permanent);
	}

}
