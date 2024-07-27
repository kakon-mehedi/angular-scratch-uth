import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-notification-panel',
    templateUrl: './notification-panel.component.html',
    styleUrls: ['./notification-panel.component.scss']
})
export class NotificationPanelComponent {
    isLoggedIn = false;
    isNotificationPanelOpen = false;

    @Output()
    open: EventEmitter<any> = new EventEmitter();

    @Output()
    close: EventEmitter<any> = new EventEmitter();


    constructor() {
    
    }

    toggleNotification() {

    }

    closeNotificationPanel() {
        this.close.emit();
    }
}