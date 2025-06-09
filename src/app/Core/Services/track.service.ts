import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviornment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly _HttpClient = inject(HttpClient)
  getallTracks():Observable<any>{
    return this._HttpClient.get(`${enviornment.baseUrl}/api/Tracks`)
  }
}
