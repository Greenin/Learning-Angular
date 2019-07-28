import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bLoginDone: boolean;

  constructor() { 
  	this.bLoginDone = false;
  }

  ngOnInit() {
  }


  mLogin(){
  	this.bLoginDone = true;
  }

  mLogout(){
  	this.bLoginDone = false;
  }

}
