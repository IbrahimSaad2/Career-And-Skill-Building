import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviornment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly _HttpClient = inject(HttpClient)
    getallTracks(query: string): Observable<any> {
      if (!query || query.trim() === '') {
              return this._HttpClient.get(`${enviornment.baseUrl}/api/Tracks`);
      }

      return this._HttpClient.get(`${enviornment.baseUrl}/api/Tracks?searchWord=${query}`);
    }
}
