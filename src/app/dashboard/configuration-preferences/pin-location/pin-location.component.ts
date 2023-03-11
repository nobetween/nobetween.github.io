import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-pin-location',
	templateUrl: './pin-location.component.html',
	styleUrls: ['./pin-location.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class PinLocationComponentConfig implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
