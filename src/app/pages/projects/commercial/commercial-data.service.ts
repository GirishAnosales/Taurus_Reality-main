import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CommercialDataService {

	protected commercial = [
	];

	getCommercialDataService() {
		return this.commercial;
	}
}
