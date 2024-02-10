import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ImagesUrlService {

	private images = {
		home: {
			image1: "https://firebasestorage.googleapis.com/v0/b/taurus-reality.appspot.com/o/assets%2Fimages%2Fhome%2FAriel%20view%201.jpg?alt=media&token=e26f3446-8aef-44b2-9bda-4b4fff6149d4",
			image2: "https://firebasestorage.googleapis.com/v0/b/taurus-reality.appspot.com/o/assets%2Fimages%2Fhome%2FAriel%20view%202.jpg?alt=media&token=9dc75f69-1e26-405b-947f-b1a5a908ec8d",
			image3: "https://firebasestorage.googleapis.com/v0/b/taurus-reality.appspot.com/o/assets%2Fimages%2Fhome%2FAriel%20view%203.jpg?alt=media&token=09423d4d-c1fc-45d2-9ce4-849a6f6cd662",
		},
		about: {
			image1: "",
		},
		contact: {
			image1: "",
		},
		services: {
			realEstate: {
				image1: "",
			},
			homeLoanConsultation: {
				image1: "",
			},
			nri: {
				image1: "",
			},
		},
		projects: {
			residential: {
				image1: "https://firebasestorage.googleapis.com/v0/b/taurus-reality.appspot.com/o/assets%2Fimages%2Fprojects%2Fresidential%2FResidential.jpg?alt=media&token=eb21ccb8-2f93-40ca-959f-b8a8ca2abb35",
				imageAlt1:"Residential"
			},
			commercial: {
				image1: "https://firebasestorage.googleapis.com/v0/b/taurus-reality.appspot.com/o/assets%2Fimages%2Fprojects%2Fcommercial%2FCommercial.jpg?alt=media&token=1e59d454-e130-47cc-8377-451a2ad044fe",
				imageAlt1:"Commercial"
			},
		}
	}

	constructor() { }

	getImagesUrlService() {
		return this.images;
	}
}
