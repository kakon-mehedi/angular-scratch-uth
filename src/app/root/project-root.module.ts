import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root-component/root.component';
import { MainComponent } from './components/main/main.componnet';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { QuickPanelComponent } from './components/quick-panel/quick-panel.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './navigations/routes-lazy-loaded-modules';

@NgModule({
	declarations: [
		RootComponent,
		MainComponent,
		ToolbarComponent,
		ChatPanelComponent,
		QuickPanelComponent,
	],
	imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes)],
	exports: [],
	providers: [],
	bootstrap: [RootComponent],
})
export class ProjectRootModule {}
