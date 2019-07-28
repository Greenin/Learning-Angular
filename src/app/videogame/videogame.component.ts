import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videogame',
	templateUrl: './videogame.component.html'
})
export class VideogameComponent implements OnInit, DoCheck, OnDestroy{

	public sTitle: string;
	public sList: string;

	constructor(){

		this.sTitle = "Videogames Component";
		this.sList = "List of the most popular videogames";

		//console.log("Videogame.component.ts component has been loaded");
	}


	ngOnInit(){
		//console.log("OnInit executed!");
	}

	ngDoCheck(){
		//console.log("DoCheck executed!");
	}

	ngOnDestroy(){
		//console.log("OnDestroy executed");
	}

	mChangeTitle(){
		this.sTitle = "New component title";
	}
}