import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-conditions',
    templateUrl: './conditions.component.html',
    styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit, OnDestroy {
    tables: Table[] = [];
    conditionForm: FormGroup;
    @Input() stepper: MatStepper;
    constructor(private tableService: TableService) { }

    ngOnInit() {
        this.tableService.getTables().subscribe({
            next: (tables) => {
                this.tables = tables;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {}
        });
    }

    ngOnDestroy() { }
}
