import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommercialComponent } from './pages/projects/commercial/commercial.component';
import { ResidentialComponent } from './pages/projects/residential/residential.component';
import { HomeLoanConsultationComponent } from './pages/services/home-loan-consultation/home-loan-consultation.component';
import { NriComponent } from './pages/services/nri/nri.component';
import { RealEstateComponent } from './pages/services/real-estate/real-estate.component';
import { VillasComponent } from './pages/projects/villas/villas.component';
import { PlotsComponent } from './pages/projects/plots/plots.component';
import { PropertyInfoComponent } from './pages/property-info/property-info.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{
		path: 'services',
		children: [
			{ path: 'real-estate', component: RealEstateComponent },
			{ path: 'home-loan-consultation', component: HomeLoanConsultationComponent },
			{ path: 'nri', component: NriComponent },
		]
	},
	{
		path: 'projects',
		children: [
			{ path: 'residential', component: ResidentialComponent },
			{ path: 'commercial', component: CommercialComponent },
			{ path: 'villas', component: VillasComponent },
			{ path: 'plots', component: PlotsComponent },
			{ path: 'residential/:poperty-name', component: PropertyInfoComponent },
			{ path: 'commercial/:poperty-name', component: PropertyInfoComponent },
			{ path: 'villas/:poperty-name', component: PropertyInfoComponent },
			{ path: 'plots/:poperty-name', component: PropertyInfoComponent },
		]
	},

	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
