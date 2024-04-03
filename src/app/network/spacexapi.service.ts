import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient: HttpClient) { }

  public getMissions(): Observable<any>{
    return this.httpClient.get("https://api.spacexdata.com/v3/launches")
  }
}
