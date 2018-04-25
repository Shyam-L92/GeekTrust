import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

const getTokenURL = environment.herokuEndPoint + '/token';

@Injectable()
export class SecurityService {

  constructor(private http: HttpClient) { }
  /**
   * getToken - this will get the initial token to make the api calls.
   */
  getToken(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };

    return this.http.post(getTokenURL, '', httpOptions);
  }
}
