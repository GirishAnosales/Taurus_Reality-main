import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CompanyInfoService {

	private company_info = {
		company_name: 'Taurus Reality',
		company_address: '128, Shitole Nagar, Old Sangvi, Near Narsingh High School, Sangvi, Pune, MH - 411027, IN.',
		company_email: 'sales@taurusreality.com',
		company_mobile_1: '7875777224',
		company_mobile_2: '7875777300',
	}

	getCompanyInfoService() {
		return this.company_info;
	}
}
