import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root-component/root.component';
import { MainComponent } from './components/main/main.componnet';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { QuickPanelComponent } from './components/quick-panel/quick-panel.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [
		RootComponent,
		MainComponent,
		ToolbarComponent,
		ChatPanelComponent,
		QuickPanelComponent,
	],
	imports: [BrowserModule, SharedModule],
	exports: [],
	providers: [],
	bootstrap: [RootComponent],
})
export class ProjectRootModule {}
