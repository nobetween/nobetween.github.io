import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-geofence-type',
	templateUrl: './geofence-type.component.html',
	styleUrls: ['./geofence-type.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class GeofenceTypeComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
