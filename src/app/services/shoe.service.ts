import {Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';

@Injectable()
export class ShoeService{
	public arrayShoes: Array<Shoe>;


	constructor(){
		this.arrayShoes = [
			new Shoe('Nike Airmax', 'Nike', 'Red', 10, true),
			new Shoe('Reebook Classic', 'Reebook', 'White', 80, true),
			new Shoe('Reebook Spartan', 'Reebook', 'Black', 85, true),
			new Shoe('Nike Runner MD', 'Nike', 'Black', 60, true),
			new Shoe('Adidas Yezzy', 'Adidas', 'Gray', 180, false)
		];

	}


	mGetText(){
		return "Hello world from a service";
	}


	mGetShoes(): Array<Shoe>{
		return this.arrayShoes;
	}

}