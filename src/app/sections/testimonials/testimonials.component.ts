import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
	@Input() images = [];
	@Input() indicators = true;
	@Input() controls = true;
	@Input() autoslide = false;
	@Input() slideInterval = 3000;

	testimonials = [
		{
			name: "Vanessa Kasinsky",
			designation: "Brand Manager",
			testimony: "Vanessa always addressed my questions professionally and in a very timely manner. Working with him was a pleasure and would come with my recommendation.",
			src: "",
		},
		{
			name: "Michael Bell",
			designation: "Blogger",
			testimony: "Although we haven't had many issues but any time there has been an issue you have been incredibly helpful and whenever you have come out for an inspection you have been so personable and absolutely lovely to be around. Keep up the fantastic work!",
			src: "",
		},
		{
			name: "Ana Oliver",
			designation: "Housewife",
			testimony: "Dear Ana , we have been so grateful for all your hardwork and support. Although we haven't had many issues but any time there has been an issue you have been incredibly helpful and whenever you have come out for an inspection you have been so personable and absolutely lovely to work with.",
			src: "",
		},
		{
			name: "Caroline Reynolds",
			designation: "Marketing Manager",
			testimony: "Just to say thanks to you Caroline Reynolds and all the staff for your efforts. We are delighted with the sale price. It was a pleasure dealing with you and will recommend Caroline to friends in the future.",
			src: "",
		},
		{
			name: "Joseph Ryan",
			designation: "Designer",
			testimony: "We can't recommend Joseph strongly enough. They were friendly, professional and approachable from the minute we called asking for an appraisal right until completion. As first time sellers they made the process fast and simple, any questions we had they were happy to answer.",
			src: "",
		},
	]

	animationState = 'zoomIn';

	selectedIndex = 0;

	currentIndex: number = 0;

	constructor() { }

	ngOnInit(): void {
		if (this.autoslide) {
			this.autoSlideImages();
		}
	}

	autoSlideImages(): void {
		setInterval(() => {
			this.onNextClick();
		}, this.slideInterval);
	}

	selectImage(index: number): void {
		this.selectedIndex = index;
	}

	onPrevClick(): void {
		if (this.selectedIndex === 0) {
			this.selectedIndex = this.images.length - 1;
		} else {
			this.selectedIndex--;
		}
	}

	onNextClick(): void {
		if (this.selectedIndex === this.images.length - 1) {
			this.selectedIndex = 0;
		} else {
			this.selectedIndex++
		}
	}
}
