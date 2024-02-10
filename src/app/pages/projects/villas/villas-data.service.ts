import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class VillasDataService {

	protected villas = [
		{
			name: "Sara Abhimaan",
			developer: "Sara Builder",
			location: "Chakan",
			specification: "3 BHK Rowhouse",
			src: "../assets/images/projects/villas/sites/Sara Abhimaan.png",
		},
	];

	getVillasDataService() {
		return this.villas;
	}
}
