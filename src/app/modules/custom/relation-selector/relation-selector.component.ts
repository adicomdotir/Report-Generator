import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DataService } from 'src/app/core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-relation-selector',
    templateUrl: './relation-selector.component.html',
    styleUrls: ['./relation-selector.component.css']
})
export class RelationSelectorComponent implements OnInit, OnDestroy {
    tables: Table[] = [];
    relationSelectorForm: FormGroup;
    subscriptions: Subscription[] = [];
    selectTables = [];
    @Input() stepper: MatStepper;

    constructor(private tableService: TableService, private dataService: DataService) { }

    ngOnInit() {
        const sub = this.dataService.stepOneComplate$.subscribe({
            next: (tables) => {
                this.tables = tables;
            },
            error: (err) => {
                console.log(err);
            }
        });
        this.subscriptions.push(sub);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
}
