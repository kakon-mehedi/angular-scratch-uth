import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
	@Input()
	navigation: any;
	readonly panelOpenState = signal(false);
	constructor() {}

	ngOnInit(): void {
		console.log(this.navigation);
	}

	routers = [
		{
			title: 1,
		},

		{
			ttitle: 2,
			children: [
				{
					title: 2.1,
				},
				{
					title: 2.1,
				},
				{
					title: 2.3,
				},
				{
					title: 2.4,
					children: [
						{
							title: 2.41,
						},
					],
				},
				{
					title: 2.5,
				},
			],
		},
	];
}
