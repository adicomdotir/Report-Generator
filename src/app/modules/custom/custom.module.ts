import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CustomRoutingModule } from './custom-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CustomRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class CustomModule { }
