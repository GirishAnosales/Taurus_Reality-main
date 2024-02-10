import { Component } from '@angular/core';
import { ResidentialDataService } from './residential-data.service';

@Component({
	selector: 'app-residential',
	templateUrl: './residential.component.html',
	styleUrls: ['./residential.component.scss']
})
export class ResidentialComponent {
	residentialDataServiceData!: any;
	isEmpty!: boolean;

	constructor(
		private residentialDataService: ResidentialDataService
	) {
		this.residentialDataServiceData = residentialDataService.getResidentialDataService();
	}

	ngOnInit(): void {
		if (this.residentialDataServiceData.length == 0) {
			this.isEmpty = true;
		} else {
			this.isEmpty = false;
		}
	}

	onClick() {
		window.scrollTo(0, 0);
	}
}
