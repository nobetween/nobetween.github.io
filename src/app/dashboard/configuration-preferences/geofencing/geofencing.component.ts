import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-geofencing',
	templateUrl: './geofencing.component.html',
	styleUrls: ['./geofencing.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class GeofencingComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
