import { Component, OnInit } from '@angular/core';
import { VillasDataService } from './villas-data.service';

@Component({
	selector: 'app-villas',
	templateUrl: './villas.component.html',
	styleUrls: ['./villas.component.scss']
})
export class VillasComponent implements OnInit {
	villasDataServiceData!: any;
	isEmpty!: boolean;

	constructor(
		private villasDataService: VillasDataService
	) {
		this.villasDataServiceData = villasDataService.getVillasDataService();
	}

	ngOnInit(): void {
		if (this.villasDataServiceData.length == 0) {
			this.isEmpty = true;
		} else {
			this.isEmpty = false;
		}
	}

	onClick() {
		window.scrollTo(0, 0);
	}
}
