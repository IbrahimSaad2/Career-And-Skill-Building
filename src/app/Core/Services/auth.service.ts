import {jwtDecode} from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../interfaces/iuser-data';
import { enviornment } from './environments/environment';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _HttpClient = inject(HttpClient);
  userData:IUserData = {} as IUserData;


  postsignup(data:object):Observable<any>{
    return this._HttpClient.post(`${enviornment.baseUrl}/api/Authentication/RegisterRegularUser`,data)
  }
  postlogin(data:object):Observable<any>{
    return this._HttpClient.post(`${enviornment.baseUrl}/api/Authentication/RegularUser`,data)
  }
  userId:string = ''
  decodeToken():void{
    if(localStorage.getItem('token')!==null){
      this.userData = jwtDecode(localStorage.getItem('token')!)
      console.log(this.userData.id)
      localStorage.setItem('UserId',this.userData.id)
      this.userId = this.userData.id
    }
  }

  resetPassword(data:object):Observable<any>{
    return this._HttpClient.put('api',data)
  }

  postignupCompany(data:object):Observable<any>
  {
    return this._HttpClient.post(`${enviornment.baseUrl}/api/Authentication/RegisterCompany`,data)
  }

  postloginCompany(data:object):Observable<any>{
    return this._HttpClient.post(`${enviornment.baseUrl}/api/Authentication/CompanyUser`,data)
  }


}
