import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface IGetTheatresAndMoviesReq {
    user_mail_id: string;
}

export interface IGetTheatresAndMoviesRes {
    theatre: string;
    movies: IMoviesRes[];
}

export interface ITheatreDetailsRes {
    website: string;
    address: string;
    show1_movie: string;
    show4_time: string;
    thumbnail_url: string;
    customer_rating: string;
    show2_time: string;
    show2_movie: string;
    theatre_name: string;
    show4_movie: string;
    show1_time: string;
    show3_time: string;
    show3_movie: string;
    booked_seats: IBookedSeatsRes[];
}

export interface IBookedSeatsRes {
    date: string;
    show1_time: string;
    show1_booked_seats: string;
}

export interface IMoviesRes {
    release_date: string;
    running_time: string;
    language: string;
    movie_name: string;
    thumbnail_url: string;
    imdb_rating: string;
    tags: string;
}

export interface IBookTicketsReq {
    show_time: string;
    movie_name: string;
    theatre_name: string;
    booked_seats: string;
    date: string;
    user_mail_id: string;
}

export interface IBookTicketsRes {
    message: string
}

export interface IHeaders {
    headers: HttpHeaders;
    params: HttpParams;
}

