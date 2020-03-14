import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from 'src/app/core/services/data.service';

@Component({
    selector: 'app-table-selector',
    templateUrl: './table-selector.component.html',
    styleUrls: ['./table-selector.component.css']
})
export class TableSelectorComponent implements OnInit, OnDestroy {
    tables: Table[] = [];
    tableSelectorForm: FormGroup;
    // dataTable definitions
    @Input() stepper: MatStepper;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    dataSource: MatTableDataSource<Table>;
    displayedColumns: string[] = ['number', 'id', 'faName', 'enName', 'buttons'];
    selection = new SelectionModel<Table>(true, []);

    constructor(private tableService: TableService, private dataService: DataService) { }

    ngOnInit() {
        this.tableService.getTables().subscribe({
            next: (tables) => {
                this.fillDataSource(tables);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => { this.dataSource.paginator = this.paginator; }
        });
    }

    fillDataSource(res: Table[]) {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    nextStep() {
        this.dataService.complateStepOne(this.selection.selected);
        this.stepper.next();
    }

    ngOnDestroy() { }
}
