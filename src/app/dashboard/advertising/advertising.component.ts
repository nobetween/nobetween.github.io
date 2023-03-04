import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-advertising',
	templateUrl: './advertising.component.html',
	styleUrls: ['./advertising.component.scss', '../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class AdvertisingComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
