import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-commentary',
	templateUrl: './commentary.component.html',
	styleUrls: ['./commentary.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule],
	encapsulation: ViewEncapsulation.None
})
export class CommentaryComponent implements OnInit
{

	constructor() { }

	ngOnInit(): void
	{
	}

}
