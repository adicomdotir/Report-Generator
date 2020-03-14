import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Table } from 'src/app/shared/models/table';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private stepOneComplateSource = new Subject<Table[]>();
    stepOneComplate$ = this.stepOneComplateSource.asObservable();

    constructor() { }

    complateStepOne(tables: Table[]) {
        this.stepOneComplateSource.next(tables);
    }

}
