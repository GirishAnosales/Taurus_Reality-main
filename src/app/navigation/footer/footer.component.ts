import { Component } from '@angular/core';
import { CompanyInfoService } from 'src/app/shared/company/company-info.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	companyData!: any;

	constructor(
		private companyInfoService: CompanyInfoService,
	) {
		this.companyData = companyInfoService.getCompanyInfoService();
	}
}
