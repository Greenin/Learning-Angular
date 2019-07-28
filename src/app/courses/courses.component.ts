
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
	public name: string;
	public followers: number;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router
  ){ }

  ngOnInit() {
  	this._route.params.subscribe((params: Params) => {
  		this.name = params.name;
  		this.followers = +params.followers;
  		//this.name = params['name'];
  		//console.log(this.name);

  		if (this.name == 'none'){
  			this._router.navigate(['/home']);
  		}
  	});
  }

  mRedirect(){
  	this._router.navigate(['/shoes']);
  }

}
