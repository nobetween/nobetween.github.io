import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss', '../../app.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
