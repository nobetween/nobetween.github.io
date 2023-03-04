import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-trends-analysis',
	templateUrl: './trends-analysis.component.html',
	styleUrls: ['./trends-analysis.component.scss', '../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class TrendsAnalysisComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
