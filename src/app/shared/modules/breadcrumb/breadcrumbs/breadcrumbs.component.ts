import { Component, Input, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IBreadcrumb } from '../breadcrumbs.model';
import { BreadcrumbsService } from '../breadcrumbs.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class BreadcrumbComponent implements OnInit, OnDestroy {
    private ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    private ROUTE_PARAM_BREADCRUMB = 'breadcrumb';
    private PREFIX_BREADCRUMB = 'prefixBreadcrumb';
    private currentBreadcrumbs: IBreadcrumb[];
    private subscription: Subscription[] = [];
    breadcrumbs: IBreadcrumb[];

    @Input() allowBootstrap: boolean;
    @Input() addClass: string;


    constructor(private breadcrumbService: BreadcrumbsService, private activatedRoute: ActivatedRoute, private router: Router) {
        const subs = breadcrumbService.get().subscribe((breadcrumbs: IBreadcrumb[]) => {
            this.breadcrumbs = breadcrumbs as IBreadcrumb[];
        });
        this.subscription.push(subs);
    }

    hasParams(breadcrumb: IBreadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    }

    ngOnDestroy() {
        this.subscription.forEach(x => x.unsubscribe());
    }


    ngOnInit() {
        if (this.router.navigated) {
            this.generateBreadcrumbTrail();
        }

        const subs = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd
            )).subscribe(event => {
                this.generateBreadcrumbTrail();
            });
        this.subscription.push(subs);
    }

    private generateBreadcrumbTrail() {
        this.currentBreadcrumbs = [];

        let currentRoute: ActivatedRoute = this.activatedRoute.root;

        let url = '';

        while (currentRoute.children.length > 0) {
            const childrenRoutes: ActivatedRoute[] = currentRoute.children;
            let breadCrumbLabel = '';

            childrenRoutes.forEach(route => {
                currentRoute = route;
                if (route.outlet !== PRIMARY_OUTLET) {
                    return;
                }
                const hasData = (route.routeConfig && route.routeConfig.data);
                const hasDynamicBreadcrumb: boolean = route.snapshot.params.hasOwnProperty(this.ROUTE_PARAM_BREADCRUMB);

                if (hasData || hasDynamicBreadcrumb) {
                    if (hasDynamicBreadcrumb) {
                        breadCrumbLabel = route.snapshot.params[this.ROUTE_PARAM_BREADCRUMB].replace(/_/g, ' ');
                    } else if (route.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
                        breadCrumbLabel = route.snapshot.data[this.ROUTE_DATA_BREADCRUMB];
                    }
                    const routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
                    url += `/${routeURL}`;
                    if (routeURL.length === 0) {
                        route.snapshot.params = {};
                    }
                    const breadcrumb: IBreadcrumb = {
                        label: breadCrumbLabel,
                        params: route.snapshot.params,
                        url
                    };
                    if (route.snapshot.data.hasOwnProperty(this.PREFIX_BREADCRUMB)) {
                        this.breadcrumbService.storePrefixed(breadcrumb);
                    } else {
                        this.currentBreadcrumbs.push(breadcrumb);
                    }
                }
            });
            this.breadcrumbService.store(this.currentBreadcrumbs);
        }
    }
}
