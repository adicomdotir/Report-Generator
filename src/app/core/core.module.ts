import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [HeaderComponent],
    providers: [],
    declarations: [HeaderComponent]

})
export class CoreModule { }
