import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-approach-shot',
	templateUrl: './approach-shot.component.html',
	styleUrls: ['./approach-shot.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class ApproachShotComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
