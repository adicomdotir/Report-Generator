import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DataService } from 'src/app/core/services/data.service';
import { Subscription } from 'rxjs';
import { Field } from 'src/app/shared/models/field';
import { FieldService } from 'src/app/core/services/field.service';

class RelationModel {
    id: number;
    tableOne: number;
    tableTwo: number;
    fieldOne: number;
    fieldsTableOne: Field[];
    fieldTwo: number;
    fieldsTableTwo: Field[];
    relation: number;

    constructor() {
        this.id = -1;
        this.tableOne = -1;
        this.tableTwo = -1;
        this.fieldOne = -1;
        this.fieldTwo = -1;
        this.relation = -1;
        this.fieldsTableOne = [];
        this.fieldsTableTwo = [];
    }
}

const RELATIONS = [
    { id: 1, name: 'ارتباط از راست' },
    { id: 2, name: 'ارتباط' },
    { id: 3, name: 'ارتباط از چپ' },
];

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
    relations = RELATIONS;
    @Input() stepper: MatStepper;

    constructor(private tableService: TableService, private dataService: DataService, private fieldService: FieldService) { }

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
    }

    deleteRelation(index) {
        this.models.splice(index, 1);
    }

    tableChange(tableIndex, rowIndex) {
        const rowModel = this.models[rowIndex];
        if (tableIndex === 1) {
            this.fieldService.getFields().subscribe({
                next: (fields) => {
                    rowModel.fieldsTableOne = fields.filter(item => item.tableId === rowModel.tableOne);
                },
                error: (err) => {
                    console.log(err);
                }
            });
        } else if (tableIndex === 2) {
            this.fieldService.getFields().subscribe({
                next: (fields) => {
                    rowModel.fieldsTableTwo = fields.filter(item => item.tableId === rowModel.tableTwo);
                },
                error: (err) => {
                    console.log(err);
                }
            });
        }
    }
}
