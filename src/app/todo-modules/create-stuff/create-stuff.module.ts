import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStuffComponent } from './create-stuff.component';
import { CreateStuffService } from './create-stuff.service';
import { HttpModule } from '@angular/http';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule
	],
	declarations: [CreateStuffComponent],
	exports: [CreateStuffComponent],
	providers: [CreateStuffService]
})
export class CreateStuffModule { }
