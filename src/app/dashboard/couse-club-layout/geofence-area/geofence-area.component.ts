import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-geofence-area',
	templateUrl: './geofence-area.component.html',
	styleUrls: ['./geofence-area.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class GeofenceAreaComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
