import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FeatureCanActivate implements CanActivate {
	constructor(private _router: Router) {}
	authorizedMember = true;

	canActivate(
		currentRoute: ActivatedRouteSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (!this.authorizedMember) return false;
		return true;
	}
}
