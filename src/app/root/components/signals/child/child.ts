import { Component, Input, OnInit, inject, input } from '@angular/core';
import { SignalService } from '../sig.service';
import { CommonModule } from '@angular/common';
import { Signal2Service } from '../sign2.service';

@Component({
	selector: 'app-child',
	templateUrl: './child.html',
	standalone: true,
	imports: [CommonModule],
	providers: [SignalService],
})
export class Child implements OnInit {
	@Input()
	student: any = [];
	

	ngOnInit(): void {}

	constructor() {
		
	}

	showSig2Val(sig2: Signal2Service) {
        console.log('signal 2 service');
        console.log(sig2);
		console.log(sig2);
    }
}
