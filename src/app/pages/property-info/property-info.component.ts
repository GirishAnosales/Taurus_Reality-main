import { Component, OnInit } from '@angular/core';
import { ResidentialDataService } from '../projects/residential/residential-data.service';
import { ActivatedRoute } from '@angular/router';
import { PlotsDataService } from '../projects/plots/plots-data.service';
import { VillasDataService } from '../projects/villas/villas-data.service';
import { CommercialDataService } from '../projects/commercial/commercial-data.service';

@Component({
	selector: 'app-property-info',
	templateUrl: './property-info.component.html',
	styleUrls: ['./property-info.component.scss']
})
export class PropertyInfoComponent implements OnInit {
	residentialDataServiceData!: any;
	commercialDataServiceData!: any;
	villasDataServiceData!: any;
	plotsDataServiceData!: any;
	propertyType!: string;
	propertyName!: string;
	propertyDeveloper!: string;
	propertyLocation!: string;
	propertySpecification!: string;
	propertySrc!: string;
	propertyDetails: any;

	constructor(
		private residentialDataService: ResidentialDataService,
		private commercialDataService: CommercialDataService,
		private villasDataService: VillasDataService,
		private plotsDataService: PlotsDataService,
		private route: ActivatedRoute,
	) {
		this.residentialDataServiceData = residentialDataService.getResidentialDataService();
		this.commercialDataServiceData = commercialDataService.getCommercialDataService();
		this.villasDataServiceData = villasDataService.getVillasDataService();
		this.plotsDataServiceData = plotsDataService.getPlotsDataService();
	}

	ngOnInit() {
		// Get the URL segments
		const url = this.route.snapshot.url;

		if (url.length >= 2) {
			const firstValue = url[0].path; // /projects
			const secondValue = url[1].path; // /residential

			this.propertyType = firstValue;
			this.propertyName = secondValue;

			let property; // Declare a variable to store the found property

			if (this.propertyType === 'residential') {
				property = this.residentialDataServiceData.find((property: { name: string; }) => property.name === this.propertyName);
			} else if (this.propertyType === 'commercial') {
				property = this.commercialDataServiceData.find((property: { name: string; }) => property.name === this.propertyName);
			} else if (this.propertyType === 'villas') {
				property = this.villasDataServiceData.find((property: { name: string; }) => property.name === this.propertyName);
			} else if (this.propertyType === 'plots') {
				property = this.plotsDataServiceData.find((property: { name: string; }) => property.name === this.propertyName);
			} else {
				console.log('Property type not recognized');
			}

			if (property) {
				this.propertyDeveloper = property.developer;
				this.propertyLocation = property.location;
				this.propertySpecification = property.specification;
				this.propertySrc = property.src;
			} else {
				console.log('Property not found');
			}

			console.log('First Value:', firstValue);
			console.log('Second Value:', secondValue);
		} else {
			console.log('URL does not have enough segments');
		}
	}

}
