import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { ProjectRootModule } from './app/root/project-root.module';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(ProjectRootModule)
	.then((moduleRef) => {
		console.log(moduleRef);
	})
	.catch((err) => console.error(err));
