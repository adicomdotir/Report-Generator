import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SideComponent } from './layout/sidebar-component/side.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        AngularMaterialModule
    ],
    exports: [HeaderComponent, SideComponent],
    providers: [],
    declarations: [HeaderComponent, SideComponent]

})
export class CoreModule { }
