import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-course-change',
	templateUrl: './course-change.component.html',
	styleUrls: ['./course-change.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class CourseChangeComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
