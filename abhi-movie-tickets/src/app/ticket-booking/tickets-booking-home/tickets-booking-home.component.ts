import { Component, OnInit } from '@angular/core';
import { IBookTicketsReq, IBookTicketsRes, IGetTheatresAndMoviesReq, IGetTheatresAndMoviesRes, IMoviesRes } from 'src/app/shared/models/ticket-booking-api-interface.model';
import { TicketBookingService } from '../ticket-booking.service';
import { BOOKING_APP } from 'src/app/shared/constants/ticket-booking-constants';
import { IMovieCardEvent, IMovieDetail, IMovies, ITheatres } from 'src/app/shared/models/theatre-and-movie-interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-tickets-booking-home',
  templateUrl: './tickets-booking-home.component.html',
  styleUrls: ['./tickets-booking-home.component.scss']
})

export class TicketsBookingHomeComponent implements OnInit {
  theatreAndMovieList: ITheatres[] = [];
  apiResponse: any;
  emailId!: string;
  showSpinner = false;
  showModal = false;
  selectedTheatre!: ITheatres;
  selectedMovieDetails!: IMovieCardEvent;
  listType: 'theatreList' | 'movieList' | 'none' = 'theatreList';
  headerTitle: 'Theatres' | 'Movies' = 'Theatres';
  currentDate: any = new Date();
  selectedDate: any;
  movieStartDate: any;
  movieEndDate: any;
  constructor(private ticketService: TicketBookingService, private route: Router, private notifier: MatSnackBar) {}

  ngOnInit(): void {
    this.movieStartDate = new Date();
    this.movieEndDate = new Date(this.movieStartDate.getFullYear(), this.movieStartDate.getMonth(), this.movieStartDate.getDate() + 5);
    const date = `0${this.currentDate.getDate()}`.slice(-2);
    const month = `0${this.currentDate.getMonth() + 1}`.slice(-2);
    this.currentDate = `${date}/${month}/${this.currentDate.getFullYear()}`;
    const apiKey = sessionStorage.getItem(BOOKING_APP.apiKey);
    if(apiKey) {
      this.emailId = apiKey;
    }
    const reqObj: IGetTheatresAndMoviesReq = <IGetTheatresAndMoviesReq>{};
    reqObj.user_mail_id = this.emailId;
    this.showSpinner = true;
    this.getAllTheatresAndMovies(reqObj);
  }

  dateChanged(dateValue: MatDatepickerInputEvent<Date>) {
    const selectedDate: any = dateValue.value;
    const date = `0${selectedDate?.getDate()}`.slice(-2);
    const month = `0${selectedDate?.getMonth() + 1}`.slice(-2);
    this.selectedDate = `${date}/${month}/${selectedDate.getFullYear()}`;
    this.currentDate = this.selectedDate;
    this.listType = 'none';
    this.createDataStructure(this.apiResponse);
    this.listType = 'theatreList';
  }

  getAllTheatresAndMovies(reqObj: IGetTheatresAndMoviesReq): void {
    this.ticketService.getAllTheatresAndMovies(reqObj).subscribe({
      next: (res: IGetTheatresAndMoviesRes)=>{
        this.createDataStructure(res);
        this.apiResponse = res;
        this.listType = 'theatreList';
        this.showSpinner = false;
      },
      error: ()=>{
        this.showSpinner = false;
        sessionStorage.removeItem(BOOKING_APP.apiKey);
        this.route.navigateByUrl('/login');
      }
    });
  }

  cancelBooking() {
    this.showModal = false;
    this.listType = 'theatreList';
    this.headerTitle = 'Theatres';
    this.selectedMovieDetails = <IMovieCardEvent>{};
    this.selectedTheatre = <ITheatres>{};
  }

  resetData() {
    this.selectedMovieDetails = <IMovieCardEvent>{};
    this.selectedTheatre = <ITheatres>{};
    this.theatreAndMovieList = [];
    this.headerTitle = 'Theatres';
  }

  // creates a manipulative list of theatre with its movies and shows
  createDataStructure(theatreMovieData: IGetTheatresAndMoviesRes) {
    this.resetData();
    theatreMovieData.theatre.forEach((theatreData)=>{
      const theatresAndMovies: ITheatres = <ITheatres>{};
      theatresAndMovies.address = theatreData.address;
      theatresAndMovies.customerRating = theatreData.customer_rating;
      theatresAndMovies.theatreName = theatreData.theatre_name;
      theatresAndMovies.theatreImage = theatreData.thumbnail_url;
      theatresAndMovies.websiteUrl = theatreData.website;
      const moviesData = this.createMovieDataStructure(theatreData, theatreMovieData.movies);
      theatresAndMovies.movieNames = Array.from(moviesData.keys());
      theatresAndMovies.movies = Array.from(moviesData.values());
      this.theatreAndMovieList.push(theatresAndMovies);
    });
    console.log(this.theatreAndMovieList);
  }

  // creates a movies map with key as movie name and values as movie details
  createMovieDataStructure(theatreData: any, movieDetails: any[]): any {
    const movieMap = new Map();
    BOOKING_APP.shows.forEach((showKey)=>{
      const movieName = theatreData[`${showKey}${BOOKING_APP.movie}`];
      const showTime = theatreData[`${showKey}${BOOKING_APP.time}`];
      const movieData: IMovies = movieMap.get(movieName);
      if (movieData) {
        movieData.shows = movieData.shows.concat(showTime);
        movieData.bookedSeats.push(this.filterAndConcatBookedSeatsdata(theatreData.booked_seats,
          showKey, showTime));
        movieMap.set(movieName, movieData);
      } else {
        const movieData: IMovies = <IMovies>{};
        movieData.shows = [showTime];
        movieData.bookedSeats = [];
        movieData.bookedSeats.push(this.filterAndConcatBookedSeatsdata(theatreData.booked_seats,
           showKey, showTime));
        movieData.movieName = movieName;
        movieData.movieDetails = this.setMovieData(movieName, movieDetails);
        movieMap.set(movieName, movieData)
      }
    });
    return movieMap;
  }

  // to filter the booked seats data with today's date
  filterAndConcatBookedSeatsdata(bookedSeats: any[], showKey: string, showTime: string): any[] {
    if (bookedSeats?.length > 0) {
      let bookedSeatsArray: any = [];
      bookedSeats?.forEach((seats)=>{
        if(seats.date === this.currentDate && seats[`${showKey}${BOOKING_APP.time}`] === showTime){
          let seatList = seats[`${showKey}${BOOKING_APP.seats}`].replace(/\[|\]/g,'').split(',');
          seatList = seatList.map((data: any)=>{
            if(Number(data) !== undefined){
              return Number(data)
            }  else {
              return 0
            }
          })
          bookedSeatsArray = bookedSeatsArray.concat(seatList);
        }
      });
      return bookedSeatsArray;
    }
    return [];
  }

  // sets movie details of a movie and send appropriate data
  setMovieData(movieName: any, movieDetails: IMoviesRes[]): IMovieDetail {
    const movieDataRes: any = movieDetails.find((data)=>{
      return data.movie_name === movieName
    })
    const movieDetailObj: IMovieDetail = <IMovieDetail>{};
    movieDetailObj.language = movieDataRes.language;
    movieDetailObj.movieGenre = movieDataRes.tags;
    movieDetailObj.movieRatings = movieDataRes.imdb_rating;
    movieDetailObj.posterUrl = movieDataRes.thumbnail_url;
    movieDetailObj.releaseDate = movieDataRes.release_date;
    movieDetailObj.runningTime = movieDataRes.running_time;
    return movieDetailObj;
  }

  getSelectedTheatre(theatre: ITheatres) {
    if (!this.selectedDate) {
      this.openNotifier('Please select a Date to Book tickets', 'failure');
      return;
    }
    this.selectedTheatre = theatre;
    this.listType = 'movieList';
    this.headerTitle = 'Movies';
  }

  goToLogin() {
    if(this.listType === 'theatreList'){
      sessionStorage.removeItem(BOOKING_APP.apiKey);
      this.route.navigateByUrl('/login');
    } else {
      this.listType = 'theatreList';
    }
  }

  openModalForBooking(event: any) {
    this.selectedMovieDetails = event;
    this.showModal = true;
  }

  openNotifier(message: string, type: 'Success' | 'failure') {
    this.notifier.open(message, type, {duration: 3000})
  }

  bookTickets(bookedSeats: []){
    if(bookedSeats.length === 0){
      this.openNotifier('Please select seats to Book tickets', 'failure');
      return;
    }
    this.showModal = false;
    const bookingReq: IBookTicketsReq = {
      movie_name: this.selectedMovieDetails.movieName,
      theatre_name: this.selectedMovieDetails.theatreName,
      show_time: this.selectedMovieDetails.showTime,
      booked_seats: JSON.stringify(bookedSeats),
      date: this.selectedDate,
      user_mail_id: this.emailId
    }
    this.showSpinner = true;
    this.ticketService.bookTickets(bookingReq).subscribe({
      next:(res: IBookTicketsRes)=>{
        this.showSpinner = false;
        this.selectedMovieDetails = <IMovieCardEvent>{};
        this.selectedTheatre = <ITheatres>{};
        this.theatreAndMovieList = [];
        this.openNotifier(res.message, 'Success');
        const reqObj: IGetTheatresAndMoviesReq = <IGetTheatresAndMoviesReq>{};
        reqObj.user_mail_id = this.emailId;
        this.showSpinner = true;
        this.getAllTheatresAndMovies(reqObj);
      },
      error: (err)=>{
        console.log(err);
        this.showSpinner = false;
        this.openNotifier('Booking Tickets failed', 'failure');
      }
    });
  }

}
