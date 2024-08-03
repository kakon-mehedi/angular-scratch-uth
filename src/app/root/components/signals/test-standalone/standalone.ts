import { Component } from '@angular/core';
import { AddRemoveTextPipe } from './custom-pipes/add-rmv-text.pipe';
import { HightlightDirective } from './custom-directives/highlight.directive';
import { CommonModule } from '@angular/common';
import { NgIfKakonDirective } from './custom-directives/ngIf-kakon.directive';
import { NgForKakonDirective } from './custom-directives/ngforkakon.directive';
import { HideAfterDirective } from './custom-directives/hide-after.directive';
import { MultipleInputDirective } from './custom-directives/test-directives';

@Component({
	selector: 'app-test-standalone',
	templateUrl: './standalone.html',
	standalone: true,
	imports: [
		AddRemoveTextPipe,
		HightlightDirective,
		CommonModule,
		NgIfKakonDirective,
        NgForKakonDirective,
		HideAfterDirective,
		MultipleInputDirective
	],
})
export class StandaloneTestComponent {
	color = '';

	user = {
		name: 'kakon',
		age: 20,
	};

	students = [
		{
			id: 1,
			name: 'kakon',
		},
		{
			id: 2,
			name: 'mehedi',
		},
	];

	onBgRed() {
		alert('bg laal ho geya');
	}
}
