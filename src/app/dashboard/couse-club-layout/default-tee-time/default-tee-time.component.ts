import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-default-tee-time',
	templateUrl: './default-tee-time.component.html',
	styleUrls: ['./default-tee-time.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class DefaultTeeTimeComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
