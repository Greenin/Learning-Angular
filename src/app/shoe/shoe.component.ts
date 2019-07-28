import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe';
import { ShoeService } from '../services/shoe.service';

@Component({
	selector: 'shoe',
	templateUrl: './shoe.component.html',
	providers: [ShoeService]
})
export class ShoeComponent implements OnInit{
	public sTitle: string;
	public aShoes: Array<Shoe>;
	public aBrands: String[];
	public sColor: string;
	public sMyBrand: string;


	constructor(
		private _shoeService: ShoeService
	){
		this.sMyBrand = "Fila";
		this.sColor = "blue";
		this.aBrands = new Array();
		
		this.sTitle = "Shoe component";
		//console.log("Shoe.component.ts component has been loaded");

	}

	ngOnInit(){
		//console.log(this.aShoes);
		this.aShoes = this._shoeService.mGetShoes();
		//alert(this._shoeService.mGetText());

		this.mGetBrands();
	}


	mGetBrands(){
		this.aShoes.forEach((oSneaker, iIndex) => {
			if (!this.aBrands.includes(oSneaker.sBrand))
			{
				this.aBrands.push(oSneaker.sBrand);
			}
			//console.log(iIndex);
		});

		console.log(this.aBrands);
	}


	mGetBrand(){
		alert(this.sMyBrand);
	}


	mAddBrand(){
		this.aBrands.push(this.sMyBrand);
	}

	mDeleteBrand(iIndex){
		//delete this.aBrands[iIndex];
		this.aBrands.splice(iIndex,1);
	}

	eOnBlur(){
		console.log("You have left the input");
	}


	eShowWord(){
		alert(this.sMyBrand);
	}

}