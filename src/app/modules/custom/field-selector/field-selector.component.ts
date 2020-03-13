import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-field-selector',
    templateUrl: './field-selector.component.html',
    styleUrls: ['./field-selector.component.css']
})
export class FieldSelectorComponent implements OnInit, OnDestroy {
    tables: Table[] = [];
    fieldSelectorForm: FormGroup;
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
