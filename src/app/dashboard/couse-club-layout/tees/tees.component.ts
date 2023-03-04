import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-tees',
	templateUrl: './tees.component.html',
	styleUrls: ['./tees.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class TeesComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
