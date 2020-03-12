import {NgModule} from '@angular/core';
import {BreadcrumbComponent} from './breadcrumbs/breadcrumbs.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BreadcrumbsService} from './breadcrumbs.service';

@NgModule({

    declarations: [
        BreadcrumbComponent
    ],
    providers: [
        BreadcrumbsService
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbsModule {
    constructor() {}

}
