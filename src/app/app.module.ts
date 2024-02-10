import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SearchPropertiesFormComponent } from './forms/search-properties-form/search-properties-form.component';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommercialComponent } from './pages/projects/commercial/commercial.component';
import { ResidentialComponent } from './pages/projects/residential/residential.component';
import { HomeLoanConsultationComponent } from './pages/services/home-loan-consultation/home-loan-consultation.component';
import { NriComponent } from './pages/services/nri/nri.component';
import { RealEstateComponent } from './pages/services/real-estate/real-estate.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VillasComponent } from './pages/projects/villas/villas.component';
import { PlotsComponent } from './pages/projects/plots/plots.component';
import { PropertyInfoComponent } from './pages/property-info/property-info.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PageNotFoundComponent,
		AboutComponent,
		ContactComponent,
		ContactFormComponent,
		SearchPropertiesFormComponent,
		HeaderComponent,
		FooterComponent,
		SidenavComponent,
		ResidentialComponent,
		CommercialComponent,
		HomeLoanConsultationComponent,
		NriComponent,
		RealEstateComponent,
  TestimonialsComponent,
  VillasComponent,
  PlotsComponent,
  PropertyInfoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		LayoutModule,
		ReactiveFormsModule,
  NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
