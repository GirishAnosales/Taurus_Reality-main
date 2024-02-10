import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/forms/contact-form/contact-form.component';
import { ResidentialDataService } from '../projects/residential/residential-data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	residentialDataServiceData!: any;
	isEmpty!: boolean;
	latestProperties: any[] = [];
	featuredProperties: any[] = [];

	constructor(
		public dialog: MatDialog,
		private residentialDataService: ResidentialDataService
	) {
		this.residentialDataServiceData = residentialDataService.getResidentialDataService();
	}

	ngOnInit(): void {
		this.getLatestProperties();
		this.getFeaturedProperties();
	}

	getLatestProperties() {
		if (this.residentialDataServiceData.length >= 8) {
			this.latestProperties = this.residentialDataServiceData.slice(-8);
		} else {
			this.latestProperties = this.residentialDataServiceData;
		}
	}

	getFeaturedProperties() {
		if (this.residentialDataServiceData.length >= 8) {
			this.featuredProperties = this.residentialDataServiceData.slice(0, 8);
		} else {
			this.featuredProperties = this.residentialDataServiceData;
		}
	}

	onClick() {
		window.scrollTo(0, 0);
	}

	openDialog() {
		this.dialog.open(ContactFormComponent);
	}
}
