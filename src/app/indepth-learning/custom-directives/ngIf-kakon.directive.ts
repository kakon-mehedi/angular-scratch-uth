import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[ngifKakon]',
	standalone: true,
})
export class NgIfKakonDirective implements OnChanges {
	@Input() ngifKakon: any;

	constructor(
		private _templateRef: TemplateRef<any>,
		private _vcr: ViewContainerRef
	) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.ngifKakon) return;
        this._vcr.createEmbeddedView(this._templateRef);
    }

}
