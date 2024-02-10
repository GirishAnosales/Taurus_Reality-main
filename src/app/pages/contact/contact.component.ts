import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CompanyInfoService } from 'src/app/shared/company/company-info.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
	emailFormControl!: FormControl<any>;
	companyData!: any;

	constructor(
		private companyInfoService: CompanyInfoService,
	) {
		this.companyData = companyInfoService.getCompanyInfoService();
	}
}
