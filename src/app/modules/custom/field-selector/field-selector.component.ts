import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { FieldService } from 'src/app/core/services/field.service';
import { Field } from 'src/app/shared/models/field';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from 'src/app/core/services/data.service';
import { Table } from 'src/app/shared/models/table';

@Component({
    selector: 'app-field-selector',
    templateUrl: './field-selector.component.html',
    styleUrls: ['./field-selector.component.css']
})
export class FieldSelectorComponent implements OnInit, OnDestroy {

    @Input() stepper: MatStepper;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    dataSource: MatTableDataSource<Field>;
    displayedColumns: string[] = ['number', 'id', 'faFieldName', 'enFieldName', 'tableId', 'buttons'];
    selection = new SelectionModel<Field>(true, []);
    fields: Field[] = [];
    tables: Table[] = [];
    fieldSelectorForm: FormGroup;

    constructor(private fieldService: FieldService, private dataService: DataService) { }

    ngOnInit() {
        this.dataService.stepOneComplate$.subscribe({
            next: (tables) => {
                console.log(tables);
                this.tables = tables;
                console.log('1');

            },
            error: (err) => {
                console.log('error');
                console.log(err);
            },
            complete: () => {
                console.log('complete');

                this.fieldService.getFields().subscribe({
                    next: (fields) => {
                        console.log(fields.filter(x => this.tables.map(tbl => tbl.id)));

                        this.fillDataSource(fields);
                    },
                    error: (err) => {
                        console.log(err);
                    },
                    complete: () => { this.dataSource.paginator = this.paginator; }
                });
            }
        });
    }

    ngOnDestroy() { }

    fillDataSource(res: Field[]) {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    nextStep() {
        // this.dataService.complateStepOne(this.selection.selected);
        // this.stepper.next();
    }

}
