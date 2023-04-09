import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { zhUrlConstants } from '../shared/constants/url-constant';
import { IGetTheatresAndMoviesReq, IGetTheatresAndMoviesRes } from '../shared/models/ticket-booking-api-interface.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http: HttpClient) { }

  getAllTheatresAndMovies(reqBody: IGetTheatresAndMoviesReq,  ): Observable<IGetTheatresAndMoviesRes> {
    const url = `${zhUrlConstants.baseUrl}${zhUrlConstants.ticketBookingBaseUrl}`;
    return this.http.post<IGetTheatresAndMoviesRes>(url, reqBody);
  }

}
