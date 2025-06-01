import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { enviornment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly _HttpClient = inject(HttpClient)

  // getCompany():Observable<any>{
  //   return this._HttpClient.get(`${enviornment.baseUrl}/api`);
  // }

}
