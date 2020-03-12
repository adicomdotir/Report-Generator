import { Component } from '@angular/core';
import { routerTransition } from 'src/app/configs/animation';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'], 
    animations: [
        routerTransition
      ]
})
export class AppComponent {
    title = 'report-generator';
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}
