import { FeatureCanActivate } from '../../../shared/guards/feature-can-activate.guard';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { UnauthorizedComponent } from '../../../shared/components/unauthorized/unauthorized.component';
import { Routes } from '@angular/router';

export const authFailedRedirection: any = [
	{
		role: 'admin',
		loggedInredirectTo: '/iam',
		loggedOutredirectTo: '/login',
	},
	{
		role: 'hr',
		loggedInredirectTo: '/profile',
		loggedOutredirectTo: '/login',
	},

	{
		role: 'appuser',
		loggedInredirectTo: '/projects',
		loggedOutredirectTo: '/login',
	},
];

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
		data: {
			isFullScreen: true,
			requiredFeature: 'login',
		},
	},

	{
		path: 'login',
		loadChildren: () =>
			import('../../autentication/authentication.moudle').then(
				(m) => m.AuthenticationModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			isFullScreen: true,
			requiredFeature: 'login',
			authFailRedirection: authFailedRedirection,
			isPublic: true,
		},
	},

	{
		path: 'profile',
		loadChildren: () =>
			import('../../profile/profile.moudle').then((m) => m.ProfileModule),
		canActivate: [FeatureCanActivate],
		data: {
			isFullScreen: false,
			requiredFeature: 'User-Management.IAM',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
			breadcrumbType: 'link',
		},
	},

	{
		path: 'iam',
		loadChildren: () =>
			import('../../iam/user-management.moudle').then(
				(m) => m.UserManagementModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			isFullScreen: false,
			requiredFeature: 'User-Management.IAM',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			isHide: false,
			breadcrumbType: 'link',
		},
	},

	{
		path: 'projects',
		loadChildren: () =>
			import('../../projects/projects.moudle').then(
				(m) => m.ProjecstModule
			),
		canActivate: [FeatureCanActivate],
		data: {
			isFullScreen: false,
			requiredFeature: 'Academy.Training',
			authFailRedirection: authFailedRedirection,
			isPublic: false,
			// breadcrumb: 'COURSES',
			isHide: false,
			breadcrumbType: 'link',
		},
	},

	{
		path: '401',
		component: UnauthorizedComponent,
		data: {
			isFullScreen: false,
			isPublic: false,
		},
	},
	{
		path: '404',
		component: NotFoundComponent,
		data: {
			isFullScreen: false,
			isPublic: false,
		},
	},
	{
		path: '**',
		redirectTo: '/404',
		data: {
			isFullScreen: false,
			isPublic: false,
		},
	},
];
