import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'app-test-standalone',
	templateUrl: './standalone.html',
	styleUrls: ['./standalone.scss'],
	standalone: true,
	imports: [CommonModule],
	host: {
		'[class]': `isValid ? 'valid-class' : 'invalid-class'`,
		'id': 'kakonId',
		'kakonAttribute': 'KakonAttributeClass'
	}
})
export class StandaloneTestComponent implements OnInit {
	isValid: boolean = false;

	info = {
		userName: 'Kakon Mehedi',
		age: 20
	}

	// @HostBinding('class.test-class') showTestClass: boolean = false;
	// @HostBinding('class.danger') canApplyDangerClass: boolean = false;

	// @HostBinding('style.backgroundColor') defaultBg: string = 'teal';
	// @HostBinding('style.padding') defaultPadding: string = '24px';
	
	// @HostBinding('attr.title') title: string = 'Kota Chai na'

	ngOnInit(): void {
		// this.showTestClass = true;
		// if (!this.isValid) this.canApplyDangerClass = true; 
	}

}
