import { Component } from '@angular/core';
import { Configuration } from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sTitle = 'JS and Angular Master';
  public sDescription: string;
  public bShowVideogames: boolean = true;
  public oConfig;

  constructor(){
  	this.oConfig = Configuration;
  	this.sTitle = Configuration.title;
  	this.sDescription = Configuration.description;
  }

  mHideVideogames(bValue){
  	this.bShowVideogames = bValue;
  }
}
