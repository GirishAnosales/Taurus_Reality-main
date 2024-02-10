import { Component, OnInit } from '@angular/core';
import { PlotsDataService } from './plots-data.service';

@Component({
	selector: 'app-plots',
	templateUrl: './plots.component.html',
	styleUrls: ['./plots.component.scss']
})
export class PlotsComponent implements OnInit {
	plotsDataServiceData!: any;
	isEmpty!: boolean;

	constructor(
		private plotsDataService: PlotsDataService
	) {
		this.plotsDataServiceData = plotsDataService.getPlotsDataService();
	}

	ngOnInit(): void {
		if (this.plotsDataServiceData.length == 0) {
			this.isEmpty = true;
		} else {
			this.isEmpty = false;
		}
	}

	onClick() {
		window.scrollTo(0, 0);
	}
}
