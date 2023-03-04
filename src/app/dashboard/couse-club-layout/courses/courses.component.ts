import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
