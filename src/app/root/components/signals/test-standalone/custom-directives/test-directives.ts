import { Directive, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[kakon]',
	standalone: true,
})
export class MultipleInputDirective implements OnInit {
	@Input('kakon')
	kakon: any = undefined;

	@Input('kakonThen')
	templateRef: any = undefined;

	@Input('kakonNext')
	next: any = undefined;

    @Input('kakonCapitalizedVar')
	capitalizedVar: any = undefined;

    @Input('kakonALLCAPITAL')
	allCapital: any = undefined;

	@Input('kakonFinally')
	finally: any = undefined;

	ngOnInit() {
		console.log(this.kakon);
		console.log(this.templateRef);
		console.log(this.next);
		console.log(this.capitalizedVar);
		console.log(this.allCapital);
		console.log(this.finally);
	}
}
