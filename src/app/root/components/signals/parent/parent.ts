import { Component, input } from '@angular/core';
import { Child } from '../child/child';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.html',
})
export class Parent {
	students = [
		{
			name: 'Kakon',
			age: 33,
			dept: 'cse',
		},
		{
			name: 'Mehedi',
			age: 30,
			dept: 'eee',
		},
		{
			name: 'Borsha',
			age: 21,
			dept: 'english',
		},
	];


    trackFn(item: any) {
        return item.age;
    }
}
