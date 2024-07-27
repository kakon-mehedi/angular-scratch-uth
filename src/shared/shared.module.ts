import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.moudle';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [NavItemComponent, NotFoundComponent, UnauthorizedComponent],
	imports: [MaterialModule, CommonModule],
	exports: [
		MaterialModule,
		NavItemComponent,
		NotFoundComponent,
		UnauthorizedComponent,
	],
})
export class SharedModule {}
