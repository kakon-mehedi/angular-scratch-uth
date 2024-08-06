import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root-component/root.component';
import { MainComponent } from './components/main/main.componnet';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './navigations/routes-lazy-loaded-modules';
import { NotificationPanelComponent } from './components/notification-panel/notification-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StandaloneTestComponent } from '../indepth-learning/components/test-standalone/standalone';

@NgModule({
	declarations: [
		RootComponent,
		MainComponent,
		ToolbarComponent,
		ChatPanelComponent,
		NotificationPanelComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		SharedModule,
		RouterModule.forRoot(routes),
		StandaloneTestComponent,
	],
	exports: [],
	providers: [],
	bootstrap: [RootComponent],
})
export class ProjectRootModule {}
