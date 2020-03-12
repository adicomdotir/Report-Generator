import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() toggleSidenav = new EventEmitter<void>();
    route = '';
    title = '';

    constructor() {
        this.route = sessionStorage.getItem('route');
    }
}
