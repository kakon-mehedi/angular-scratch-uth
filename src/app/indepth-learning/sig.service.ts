import { Injectable, inject } from '@angular/core';
import { Signal2Service } from './sign2.service';
@Injectable()
export class SignalService {
	val = 30;

	constructor() {
       this.showSig2Val(Signal2Service);
	}

    showSig2Val(sig2: any) {
        console.log('signal 2 service');
        console.log(sig2);
    }


}
