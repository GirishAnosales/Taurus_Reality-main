import { Component, OnInit } from '@angular/core';
import { CommercialDataService } from './commercial-data.service';

@Component({
	selector: 'app-commercial',
	templateUrl: './commercial.component.html',
	styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
	commercialDataServiceData!: any;
	isEmpty!: boolean;

	constructor(
		private commercialDataService: CommercialDataService
	) {
		this.commercialDataServiceData = commercialDataService.getCommercialDataService();
	}

	ngOnInit(): void {
		if (this.commercialDataServiceData.length == 0) {
			this.isEmpty = true;
		} else {
			this.isEmpty = false;
		}
	}

	onClick() {
		window.scrollTo(0, 0);
	}
}
