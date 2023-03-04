import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-special-events',
	templateUrl: './special-events.component.html',
	styleUrls: ['./special-events.component.scss', '../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class SpecialEventsComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
