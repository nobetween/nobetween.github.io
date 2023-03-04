import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-training-library',
  templateUrl: './training-library.component.html',
  styleUrls: ['./training-library.component.scss', '../../dashboard.component.scss'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class TrainingLibraryComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
  }

}
