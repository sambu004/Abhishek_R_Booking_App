export interface ITheatres {
    theatreName: string;
    theatreImage: string;
    customerRating: string;
    websiteUrl: string;
    address: string;
    movies: IMovies[];
}

export interface IMovies {
    movieName: string;
    shows: string[];
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