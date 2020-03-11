import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from 'src/app/shared/models/table';

@Injectable({
    providedIn: 'root'
})
export class TableService {
    constructor(private httpClient: HttpClient) { }

    getTables() {
        return this.httpClient.get<Table[]>('./assets/json/table.json');
    }
}
