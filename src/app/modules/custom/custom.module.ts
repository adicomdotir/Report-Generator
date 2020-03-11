import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class CustomModule { }
