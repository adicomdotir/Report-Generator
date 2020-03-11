import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomRoutingModule } from '../modules/custom/custom-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        CustomRoutingModule
    ],
    exports: [
        CommonModule
    ],
    providers: []
})
export class SharedModule { }
