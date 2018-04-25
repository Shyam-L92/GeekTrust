import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Planets } from '../../shared/models/planets';

const getPlanetsURL = environment.herokuEndPoint + '/planets';
const getVehiclesURL = environment.herokuEndPoint + '/vehicles';

@Injectable()
export class ProblemService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<any> {
    return this.http.get(getPlanetsURL);
  }
  getVehicles(): Observable<any> {
    return this.http.get(getVehiclesURL);
  }
}
