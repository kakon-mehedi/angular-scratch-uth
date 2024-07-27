import { Component, Input } from '@angular/core';

@Component({
	selector: 'main-component',
	templateUrl: './main.component.html',
	styleUrls: ['./main.componnet.scss'],
})
export class MainComponent {
    @Input()
    navigations: any[] = [];

    @Input()
    routes: any[] = []

    @Input()
    quickPanelComponent: any;


    


}
