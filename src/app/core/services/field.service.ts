import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Field } from 'src/app/shared/models/field';

@Injectable({
    providedIn: 'root'
})
export class FieldService {
    constructor(private httpClient: HttpClient) { }

    getFields() {
        return this.httpClient.get<Field[]>('./assets/json/field.json');
    }
}
