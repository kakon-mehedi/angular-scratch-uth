
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Routes } from '@angular/router';
import { Observable, Subject, map, shareReplay } from 'rxjs';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
    @Input()
    navigations: any = []

    isLoggedIn = true;
	isNotificationPanelOpen = false;
    isLoading = false;
    isAdmin = false;

	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	private _unsubscribeAll: Subject<void> = new Subject();

	@ViewChild('drawer')
	drawer?: MatSidenav;

	constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
		// this.authService.user.pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
		// 	if (res) {
		// 		this.isLoggedIn = true;
		// 		this.isAdmin = res.isAdmin;
		// 	} else {
		// 		this.isLoggedIn = false;
		// 	}
		// });
		// this.isAdmin = this.checkIsAdmin();
	}

    ngOnDestroy(): void {
		this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
	}

	toggleNotification() {
		this.isNotificationPanelOpen = !this.isNotificationPanelOpen;
	}

	toggelDrawer() {
		if (!this.drawer) return;
		this.drawer.toggle();
	}

	logout() {
		// this.authService.signOut();
	}

	checkIsAdmin() {
		//return this.authService.isAdmin();
	}

	handleChangePasswordClick() {
		// this.authService.user.pipe(take(1)).subscribe((user: any) => {
		// 	if (!user) return;
		// 	const token = user._token || user.token;
		// 	this.navigateToResetPassword(token);
		// });
	}

	navigateToResetPassword(userId: string) {
		// const url = `change-password/${userId}`;
		// this.router.navigate([url]);
	}

	closeNotificationPanel() {
		this.isNotificationPanelOpen = false;
	}

    onSignOut() {}
}