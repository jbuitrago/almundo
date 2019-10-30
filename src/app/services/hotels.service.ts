import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
/**
 * @description
 * @class
 */
@Injectable()
export class HotelService {
  private hotelUrl = environment.API_ENDPOINT + '/hotels';
  constructor(public http: Http) {

  }

  getHotels(): Observable<Hotel[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const url = `${this.hotelUrl}`;
    const options = { headers: headers };
    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  search(search: string): Observable<Hotel[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const url = `${this.hotelUrl}` + '/search?' + search;
    const options = { headers: headers };
    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.text() ? res.json() : {};
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

}
