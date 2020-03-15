import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DataService } from 'src/app/core/services/data.service';
import { Subscription } from 'rxjs';

class RelationModel {
    id: number;
    tableOne: number;
    tableTwo: number;
    fieldOne: number;
    fieldTwo: number;
    relation: number;

    constructor() {
        this.id = -1;
        this.tableOne = -1;
        this.tableTwo = -1;
        this.fieldOne = -1;
        this.fieldTwo = -1;
        this.relation = -1;
    }
}

@Component({
    selector: 'app-relation-selector',
    templateUrl: './relation-selector.component.html',
    styleUrls: ['./relation-selector.component.css']
})
export class RelationSelectorComponent implements OnInit, OnDestroy {
    tables: Table[] = [];
    relationSelectorForm: FormGroup;
    subscriptions: Subscription[] = [];
    models: RelationModel[] = [];
    tableOneSelect = -1;
    tableTwoSelect = -1;
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

    addRelation() {
        this.models.push(new RelationModel());
        console.log(this.models);
        
    }
}
