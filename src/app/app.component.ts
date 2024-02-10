import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Taurus Reality';

	constructor(private router: Router){
		// const navEndEvents = router.events.pipe(
		//   filter(event => event instanceof NavigationEnd),
		// );
		// navEndEvents.subscribe((event: NavigationEnd) => {
		//   gtag('config', 'AW-11454875150', {
		//     'page-path': event.urlAfterRedirects
		//   });
		// })
	
		  const routeChange = router.events
			.pipe(
			  filter((event): event is NavigationEnd => event instanceof NavigationEnd)
			)
			.subscribe(event => {
			  gtag('config', 'G-KMQ5XQ76Q7', {
				'page-path': event.urlAfterRedirects
			  })
			});
		
	  }
	

	onClickScrollToTop() {
		window.scrollTo(0, 0);
	}

	onClickScrollToBottom() {
		window.scrollTo(0, document.body.scrollHeight,);
	}
}
