import { ConditionsComponent } from './conditions/conditions.component';
import { RelationSelectorComponent } from './relation-selector/relation-selector.component';
import { TableSelectorComponent } from './table-selector/table-selector.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CustomRoutingModule } from './custom-routing.module';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        CustomRoutingModule,
        FlexLayoutModule,
        FormsModule
    ],
    declarations: [
        HomeComponent,
        TableSelectorComponent,
        FieldSelectorComponent,
        RelationSelectorComponent,
        ConditionsComponent
    ]
})
export class CustomModule { }
