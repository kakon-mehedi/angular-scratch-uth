import {
	Directive,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

export class NgForKakonContext {
	constructor(public $implicit = undefined) {}
}

@Directive({
	selector: '[ngForKakon]',
	standalone: true,
})
export class NgForKakonDirective implements OnChanges, OnInit {
	@Input('ngForKakonOf')
	items: any;

	constructor(
		private _templateRef: TemplateRef<NgForKakonContext>,
		private _vcr: ViewContainerRef
	) {}

	ngOnChanges(changes: SimpleChanges): void {}

	ngOnInit(): void {
		console.log(this.items);

		for (const item of this.items) {
			const context = new NgForKakonContext(item);

			this._vcr.createEmbeddedView(this._templateRef, context);
		}
	}
}
