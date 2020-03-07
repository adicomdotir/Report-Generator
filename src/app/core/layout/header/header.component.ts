import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	y = 5;

	constructor(private translate: TranslateService) { }

	ngOnInit() { }

	init() { }

	changeLanguage(event) {
		this.translate.use(event.target.value);
	}
}
