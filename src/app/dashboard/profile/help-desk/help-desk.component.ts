import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-help-desk',
	templateUrl: './help-desk.component.html',
	styleUrls: ['./help-desk.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class HelpDeskComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
