import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { Parent } from '../components/parent/parent';
import { Child } from '../components/child/child';
import { StandaloneTestComponent } from '../components/test-standalone/standalone';
import { ApplicationConfig } from '@angular/core';

const appRoutes: Routes = [
	{
		path: 'crisis-center',
		loadComponent: () => {
            return import('../components/test-standalone/standalone').then(c => c.StandaloneTestComponent)
        }
	},
];
export const appConfig: ApplicationConfig = {
	providers: [provideRouter(appRoutes, withDebugTracing())],
};
