import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomRoutingModule } from '../modules/custom/custom-routing.module';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        CustomRoutingModule,
        AngularMaterialModule
    ],
    exports: [
        CommonModule,
        AngularMaterialModule
    ],
    providers: []
})
export class SharedModule { }
