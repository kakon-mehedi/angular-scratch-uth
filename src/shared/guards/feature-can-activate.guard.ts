import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class FeatureCanActivate implements CanActivate {
	constructor(private _router: Router) {}
	authorizedMember = false;

	canActivate(
		route: ActivatedRouteSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (this.authorizedMember) {
			this._router.navigate([nextState.url]);
		}
		return true;
	}
}
