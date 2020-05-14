"use strict";

// const NomberOfFilms = +prompt('how much video did u watch?', '');

// const personalMovieDB = {
//     count: NomberOfFilms,
//     movies: {},
//     actor: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('what video do u watch?', ''),
//       b = prompt('how much time?', ''),
//       c = prompt('what video do u watch?', ''),
//       d = prompt('how much time?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



const numberOfFilms = prompt('How much film do u watch?', '');

// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('U last film?', ''),
      b = prompt('How much points?', ''),
      c = prompt('U last film?', ''),
      d = prompt('How much points?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);