import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviornment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
    private readonly _HttpClient = inject(HttpClient);
    getJobs():Observable<any>{
      return this._HttpClient.get(`${enviornment.baseUrl}/api/Job`)
    }
    getSpecificJob(id:string|null):Observable<any>{
      return this._HttpClient.get(`${enviornment.baseUrl}/api/Job/${id}`)
    }
    postJobs(data:object):Observable<any>{
      return this._HttpClient.post(`${enviornment.baseUrl}/api/Job`,data);
    }
    getAllJobs():Observable<any>{
      return this._HttpClient.get(`${enviornment.baseUrl}/api/Job/CompanyPosts`);
    }
    DeleteJobs(id:number):Observable<any>{
      return this._HttpClient.delete(`${enviornment.baseUrl}/api/Job/${id}`)
    }
    editPost(id:string , data:object):Observable<any>{
      return this._HttpClient.patch(`${enviornment.baseUrl}/api/Job/Update/${id}`,data);
    }
  
}
