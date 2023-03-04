import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-tee-location',
	templateUrl: './tee-location.component.html',
	styleUrls: ['./tee-location.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class TeeLocationComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
