import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class CustomModule { }
