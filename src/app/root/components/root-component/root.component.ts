import {
	Component,
	ComponentFactoryResolver,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { QuickPanelComponent } from '../quick-panel/quick-panel.component';
import { ChatPanelComponent } from '../chat-panel/chat-panel.component';

@Component({
	selector: 'app-mother-component',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
	toolbarComponent: any = null;
	quickPanelComponent: any = null;
	chatPanelComponent: any = null;

	constructor(private cfr: ComponentFactoryResolver) {
		this.resolveRequiredComponents();
	}

	ngOnInit(): void {
		console.log('Root component loads');
	}
	ngOnDestroy(): void {}

	resolveRequiredComponents() {
		this.toolbarComponent =
			this.cfr.resolveComponentFactory(ToolbarComponent);
		this.quickPanelComponent =
			this.cfr.resolveComponentFactory(QuickPanelComponent);
		this.chatPanelComponent =
			this.cfr.resolveComponentFactory(ChatPanelComponent);
	}
}
