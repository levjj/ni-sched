'use strict';

class Counter {

	private count: number;

	constructor() {
		this.count = 0;
	}

	inc(): void {
		this.count++;
	}
	
	val(): number {
		return this.count;
	}
}
export = Counter;