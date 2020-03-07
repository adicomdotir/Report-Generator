import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomRoutingModule } from './custom-routing.module';
import { HomeComponent } from './home/home.component';
import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';
import { TrainingComponent } from './training/training.component';
import { HealingComponent } from './healing/healing.component';
import { StadiumComponent } from './stadium/stadium.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomRatingComponent } from './custom-rating/custom-rating.component';
import { PositionDetailComponent } from './position-detail/position-detail.component';
import { PlayerBoxComponent } from './custom-rating/player-box/player-box.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CustomRoutingModule,
		TranslateModule
	],
	declarations: [
		HomeComponent,
		ReversePipe,
		TrainingComponent,
		HealingComponent,
		StadiumComponent,
		CustomRatingComponent,
		PositionDetailComponent,
		PlayerBoxComponent // TODO: move to shared module
	]
})
export class CustomModule { }
