import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PlotsDataService {

	protected plots = [

	];

	getPlotsDataService() {
		return this.plots;
	}
}
