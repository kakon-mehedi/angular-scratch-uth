import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Routes } from '@angular/router';
import { Observable, Subject, map, shareReplay } from 'rxjs';

@Component({
	selector: 'main-component',
	templateUrl: './main.component.html',
	styleUrls: ['./main.componnet.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
	@Input()
	navigations: any[] = [];

	@Input()
	routeList: Routes = [];

	@Input()
	notificationPanelComponent: any;

	@Input()
	toolbarComponent: any;

	@Input()
	chatPanelComponent: any;

	isLoading = false;

	private _unsubscribeAll: Subject<void> = new Subject();

	constructor() {}

	ngOnInit() {}

	ngOnDestroy(): void {
		this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
	}
}
