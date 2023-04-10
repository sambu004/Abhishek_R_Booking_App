import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { zhUrlConstants } from '../shared/constants/url-constant';
import { IBookTicketsReq, IBookTicketsRes, IGetTheatresAndMoviesReq, IGetTheatresAndMoviesRes, IHeaders } from '../shared/models/ticket-booking-api-interface.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http: HttpClient) { }

  getOptions(type: 'getDetails' | 'bookTickets'): IHeaders {
    const options: IHeaders = <IHeaders>{};
    options.headers = new HttpHeaders().set('contentType', 'application/json');
    if(type === 'getDetails') {
      options.params = new HttpParams().set('action', 'getAllDetails');
    } else if(type === 'bookTickets') {
      options.params = new HttpParams().set('action', 'bookSeats');
    }
    return options;
  }

  getAllTheatresAndMovies(reqBody: IGetTheatresAndMoviesReq): Observable<IGetTheatresAndMoviesRes> {
    const options: IHeaders = this.getOptions('getDetails');
    const url = `${zhUrlConstants.baseUrl}${zhUrlConstants.ticketBookingBaseUrl}`;
    return this.http.post<IGetTheatresAndMoviesRes>(url, reqBody, options);
  }

  bookTickets(reqBody: IBookTicketsReq): Observable<IBookTicketsRes> {
    const url = `${zhUrlConstants.baseUrl}${zhUrlConstants.ticketBookingBaseUrl}`;
    return this.http.post<IBookTicketsRes>(url, reqBody);
  }

}
