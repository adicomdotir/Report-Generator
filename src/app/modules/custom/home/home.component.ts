import { Component, OnInit, OnDestroy } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { Table } from 'src/app/shared/models/table';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    tables: Table[] = [];

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
