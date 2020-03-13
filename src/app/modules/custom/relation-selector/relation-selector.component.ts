import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
    selector: 'app-relation-selector',
    templateUrl: './relation-selector.component.html',
    styleUrls: ['./relation-selector.component.css']
})
export class RelationSelectorComponent implements OnInit, OnDestroy {
    tables: Table[] = [];

    constructor(private tableService: TableService) { }
    relationSelectorForm: FormGroup;
    @Input() stepper: MatStepper;
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
