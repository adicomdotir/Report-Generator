import { ConditionsComponent } from './../conditions/conditions.component';
import { RelationSelectorComponent } from '../relation-selector/relation-selector.component';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TableService } from 'src/app/core/services/table.service';
import { TableSelectorComponent } from '../table-selector/table-selector.component';
import { FieldSelectorComponent } from '../field-selector/field-selector.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    isLinear = false;
    @ViewChild(TableSelectorComponent, { static: false }) tableSelectorComponent: TableSelectorComponent;
    @ViewChild(RelationSelectorComponent, { static: false }) relationSelectorComponent: RelationSelectorComponent;
    @ViewChild(FieldSelectorComponent, { static: false }) fieldSelectorComponent: FieldSelectorComponent;
    @ViewChild(ConditionsComponent, { static: false }) conditionsComponent: ConditionsComponent;

    constructor(private tableService: TableService) { }

    ngOnInit() {
    }

    ngOnDestroy() { }

    get tableSelectorStep() {
        return this.tableSelectorComponent ? this.tableSelectorComponent.tableSelectorForm : null;
    }

    get relationSelectorStep() {
        return this.relationSelectorComponent ? this.relationSelectorComponent.relationSelectorForm : null;
    }

    get fieldSelectorStep() {
        return this.fieldSelectorComponent ? this.fieldSelectorComponent.fieldSelectorForm : null;
    }

    get conditionStep() {
        return this.conditionsComponent ? this.conditionsComponent.conditionForm : null;
    }
}
