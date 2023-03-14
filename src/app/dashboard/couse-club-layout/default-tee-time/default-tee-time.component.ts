import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TeeService, TeeTime } from 'src/app/services/tee-service';

@Component({
	standalone: true,
	selector: 'app-default-tee-time',
	templateUrl: './default-tee-time.component.html',
	styleUrls: ['./default-tee-time.component.scss', '../../dashboard.component.scss'],
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatTableModule, MatButtonModule, MatCheckboxModule],
	encapsulation: ViewEncapsulation.None
})
export class DefaultTeeTimeComponent implements OnInit
{
	showGrid = true;

	formGroup = new UntypedFormGroup({});

	displayedColumns: string[] = ['edit', 'month', 'earliest', 'latest', 'intervals'];
	dataSource: MatTableDataSource<TeeTime>;

	activeTeeTime!: TeeTime;

	constructor(public teeService: TeeService)
	{
		this.dataSource = new MatTableDataSource<TeeTime>();
		this.dataSource.data = this.teeService.getTeeTimes();
	}

	ngOnInit(): void
	{
		this.formGroup.addControl('Earliest', new UntypedFormControl());
		this.formGroup.addControl('Latest', new UntypedFormControl());
		this.formGroup.addControl('Interval', new UntypedFormControl());
		this.formGroup.addControl('IsClosed', new UntypedFormControl());
	}

	onBack_Click()
	{
		this.showGrid = true;
	}

	onEdit_Click(teeTime: TeeTime)
	{
		this.showGrid = false;

		this.activeTeeTime = teeTime;

		this.formGroup.get(['Earliest'])?.setValue(teeTime.earliest);
		this.formGroup.get(['Latest'])?.setValue(teeTime.latest);
		this.formGroup.get(['Interval'])?.setValue(teeTime.intervals);
		this.formGroup.get(['IsClosed'])?.setValue(teeTime.isclosed);
	}

	onSave_Click()
	{
		this.activeTeeTime.earliest = this.formGroup.get(['Earliest'])?.value;
		this.activeTeeTime.latest = this.formGroup.get(['Latest'])?.value;
		this.activeTeeTime.intervals = this.formGroup.get(['Interval'])?.value;
		this.activeTeeTime.isclosed = this.formGroup.get(['IsClosed'])?.value;

		this.teeService.updateTeeTime(this.activeTeeTime);

		this.showGrid = true;
	}

}
