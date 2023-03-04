import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class GamesComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
