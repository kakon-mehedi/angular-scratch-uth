import {
	Component,
	ComponentFactoryResolver,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { QuickPanelComponent } from '../quick-panel/quick-panel.component';
import { ChatPanelComponent } from '../chat-panel/chat-panel.component';
import { navigations } from '../../navigations/navigations';
import { routes } from '../../navigations/routes-lazy-loaded-modules';
import { Routes } from '@angular/router';

@Component({
	selector: 'app-mother-component',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
	toolbarComponent: any = null;
	quickPanelComponent: any = null;
	chatPanelComponent: any = null;

	navigations: any = [];
	lazyLoadedModuleRouteList: Routes = [];
	

	constructor(private cfr: ComponentFactoryResolver) {
		this.resolveRequiredComponents();
		this.initRequiredValues();
	}

	ngOnInit(): void {
		console.log('Root component loads');
	}
	ngOnDestroy(): void {}

	initRequiredValues() {
		this.lazyLoadedModuleRouteList = routes;
		this.navigations = navigations;
	}

	resolveRequiredComponents() {
		this.toolbarComponent =
			this.cfr.resolveComponentFactory(ToolbarComponent);
		this.quickPanelComponent =
			this.cfr.resolveComponentFactory(QuickPanelComponent);
		this.chatPanelComponent =
			this.cfr.resolveComponentFactory(ChatPanelComponent);
	}
}
