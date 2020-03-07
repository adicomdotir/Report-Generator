import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],
	providers: [],
	declarations: [HeaderComponent]

})
export class CoreModule { }
