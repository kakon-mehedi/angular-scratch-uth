import { Component, Input } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
	selector: 'main-component',
	templateUrl: './main.component.html',
	styleUrls: ['./main.componnet.scss'],
})
export class MainComponent {
    @Input()
    navigations: any[] = [];

    @Input()
    routeList: Routes = []

    @Input()
    quickPanelComponent: any;

    @Input()
    toolbarComponent: any;


    @Input()
    chatPanelComponent: any;
    
}
