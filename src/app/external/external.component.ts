import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service'

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [RequestsService]
})
export class ExternalComponent implements OnInit {

  public oUser: any;
  public oUserId: any;
  public oDate: any;

  public oNew_User: any;
  public oUserSaved;

  constructor(
  	private _requestsService: RequestsService

  ) { 
  		this.oUserId = 1;
      this.oNew_User = {
        "name": "",
        "job": ""
      };


  }

  ngOnInit() {

  	this.oDate = new Date(2019,5,20);

  	this.mLoadUser();
  }

  mLoadUser(){
  	this.oUser = false;
  	this._requestsService.mGetUser(this.oUserId).subscribe(
  		result => {
  			//console.log(result);
  			this.oUser = result.data;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }


  onSubmit(oForm){
    this._requestsService.mAddUser(this.oNew_User).subscribe(
      response => {
          //console.log(response);
          this.oUserSaved = response;
          oForm.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
