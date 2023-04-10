export interface ITheatres {
    theatreName: string;
    theatreImage: string;
    customerRating: string;
    websiteUrl: string;
    address: string;
    movieNames: any[];
    movies: IMovies[];
}

export interface IMovies {
    movieName: string;
    shows: string[];
    bookedSeats: number[];
    movieDetails: IMovieDetail;
}

export interface IMovieDetail {
    releaseDate: string;
    runningTime: string;
    language: string;
    posterUrl: string;
    movieRatings: string;
    movieGenre: string;
}

export interface ISeats {
    seatId: number;
    seatOccupied: boolean
}