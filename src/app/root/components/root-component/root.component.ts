import {
	Component,
	ComponentFactoryResolver,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ChatPanelComponent } from '../chat-panel/chat-panel.component';
import { navigations } from '../../navigations/navigations';
import { routes } from '../../navigations/routes-lazy-loaded-modules';
import { Routes } from '@angular/router';
import { NotificationPanelComponent } from '../notification-panel/notification-panel.component';

@Component({
	selector: 'app-mother-component',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
	toolbarComponent: any = null;
	notificationPanelComponent: any = null;
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
		this.notificationPanelComponent =
			this.cfr.resolveComponentFactory(NotificationPanelComponent);
		this.chatPanelComponent =
			this.cfr.resolveComponentFactory(ChatPanelComponent);
	}
}
