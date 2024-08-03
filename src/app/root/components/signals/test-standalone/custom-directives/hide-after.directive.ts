import {
	Directive,
	Input,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

export class HideAfterContext {
	/**
	 *
	 * Implementing as time
	 * Here when you want to use "as" shorthand
	 * You need to the prop name same of it's Input() name
	 * Here bcz we are using as time which Input name is "hideAfter"
	 * That's why we need to use "hideAfter" as a prop inside the context object
     * Note: This is only when we are aliasing something
     * Otherwise you can put any prop name inside the context and can use them from the template
	 * So, What is contex at the end of the day? = Normal Js Object
	 * Why do we need context objects ? = To bind data from ng-template
	 * What is $implicit ? = Default data of the template varialbe
	 * where template varialbe does not define it's initialization explicitly
	 */

	public $implicit: any = undefined;
	public hideAfter: number = 0; // as time value will be passed from here
	public counterValFromContext: number = 0;
    public createdByFromContext: string = 'Kakon Mehedi';
    public designationFromContext: string = 'SWE'

	constructor(hideAfterValue: number) {
		this.hideAfter = hideAfterValue;
	}
}

@Directive({
	selector: '[hideAfter]',
	standalone: true,
})
export class HideAfterDirective implements OnInit {
	@Input('hideAfter')
	set delay(value: number) {
		this._delay =  value ?? 0;
		this.context.hideAfter = this.context.counterValFromContext =
			this._delay / 1000;
	}

	/**
	 * use camelCase concat with the structural Directive
	 * Every template varialbe in structural directive you need to separte them via ; symbol
	 * Let's say your structural directive selector name = hideAfter
	 * You are using a new variable inside that which called then
	 * then your Input name will be Input('hideAfterThen')
	 *
	 */
	@Input('hideAfterThen')
	placeholder: TemplateRef<HideAfterContext> | null = null;

    private _delay = 0;

	context = new HideAfterContext(this._delay);

	constructor(
		private _templateRef: TemplateRef<HideAfterContext>,
		private _vcr: ViewContainerRef
	) {}

	ngOnInit(): void {
		this._vcr.createEmbeddedView(this._templateRef, this.context);

        const interval = setInterval(() => {
            this.context.counterValFromContext = this.context.counterValFromContext - 1;
        }, 1000)

		setTimeout(() => {
			this._vcr.clear();
            clearInterval(interval);

			if (this.placeholder) {
				this._vcr.createEmbeddedView(this.placeholder, this.context);
			}
		}, this._delay);
	}
}
