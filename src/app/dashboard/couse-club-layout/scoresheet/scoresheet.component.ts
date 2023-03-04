import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-scoresheet',
	templateUrl: './scoresheet.component.html',
	styleUrls: ['./scoresheet.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class ScoresheetComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
