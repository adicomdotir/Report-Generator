import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SideComponent } from './sidebar-component/side.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HomeComponent,
        IndexComponent,
        SideComponent
    ]
})
export class CustomModule { }
