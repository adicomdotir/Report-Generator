import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomRoutingModule } from './custom-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CustomRoutingModule
	],
	declarations: [
		HomeComponent
	]
})
export class CustomModule { }
