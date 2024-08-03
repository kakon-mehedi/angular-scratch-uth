import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	OnInit,
	Optional,
	Output,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[highlight]',
	standalone: true,
})
export class HightlightDirective implements OnInit {
	@Input() highlight: string = '';
	@Input() defaultbg: string = 'red';
	@Input() othersData: any;

	@Output() onbgRed: EventEmitter<any> = new EventEmitter();

	constructor(
		private el: ElementRef,
		@Optional() private _templateRef: TemplateRef<any>,
		private _vcr: ViewContainerRef
	) {
		console.log('Host element', el);
		console.log(this.othersData);
	}

	ngOnInit() {
        console.log(this.el);
		console.log(this._templateRef);
		console.log(this._vcr);
	}

	@HostListener('mouseenter', ['$event'])
	onMouseEnter(...args: any) {
		console.log(args);
		this.applyStyle(this.highlight);
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.applyStyle('transparent');
	}

	applyStyle(bgColor: string) {
		let color = bgColor;

		if (!bgColor) {
			color = this.defaultbg;
		}
		this.el.nativeElement.style.backgroundColor = color;

		if (color === 'red') {
			this.onbgRed.emit();
		}
	}
}
