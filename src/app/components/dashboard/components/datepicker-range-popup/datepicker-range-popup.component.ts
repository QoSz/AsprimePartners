import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'ngbd-datepicker-range-popup',
	standalone: true,
    templateUrl: './datepicker-range-popup.component.html',
    styleUrls: ['./datepicker-range-popup.component.scss'],
    imports: [NgbDatepickerModule, DatePipe],
	providers: [DatePipe],
})

export class NgbdDatepickerRangePopup {
	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate | null;
	toDate: NgbDate | null;

	constructor(private calendar: NgbCalendar, private formatter: NgbDateParserFormatter) {
		this.fromDate = null;
		this.toDate = null;
	}

	onDateSelection(date: NgbDate): void {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate): boolean | null {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate): boolean | null {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate): boolean | null {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		if(!input) return currentValue;
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}

	formatDate(date: NgbDate): string {
		if (!date) return '';
		let d = new Date(date.year, date.month - 1, date.day);
		return d.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		});
	}

	formatNgbDate(date: NgbDate): string {
		return date ? `Day: ${date.day}, Month: ${date.month}, Year: ${date.year}` : '';
	}
}
