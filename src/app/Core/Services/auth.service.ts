import {jwtDecode} from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../interfaces/iuser-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _HttpClient = inject(HttpClient);
  userData:IUserData = {} as IUserData;


  postsignup(data:object):Observable<any>{
    return this._HttpClient.post('api',data)
  }
  postlogin(data:object):Observable<any>{
    return this._HttpClient.post('api',data)
  }
  userId:string = ''
  decodeToken():void{
    if(localStorage.getItem('UserToken')!==null){
      this.userData = jwtDecode(localStorage.getItem('UserToken')!)
      console.log(this.userData.id)
      localStorage.setItem('UserId',this.userData.id)
      this.userId = this.userData.id
      
    }
  }

  resetPassword(data:object):Observable<any>{
    return this._HttpClient.put('api',data)
  }

}
