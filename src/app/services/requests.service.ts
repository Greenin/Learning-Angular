import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RequestsService{
	public sUrl: string;
	
	constructor(
		public _http: HttpClient

	){
		this.sUrl = "https://reqres.in/";
	}


	mGetUser(oUserId): Observable<any>{
		return this._http.get(this.sUrl+'api/users/'+oUserId);
	}


	mAddUser(oUser): Observable<any>{
		let sParams = JSON.stringify(oUser);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.sUrl+'api/users',sParams,{headers: headers});
	}



}