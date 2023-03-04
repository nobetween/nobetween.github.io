import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-holes',
	templateUrl: './holes.component.html',
	styleUrls: ['./holes.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class HolesComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
