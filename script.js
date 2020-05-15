"use strict";


let NomberOfFilms;

function start() {
    NomberOfFilms = +prompt('how much video did u watch?', '');

    while (NomberOfFilms == '' || NomberOfFilms == null || isNaN(NomberOfFilms)) {
        NomberOfFilms = +prompt('how much video did u watch?', '');
    }
}

start();

const personalMovieDB = {
    count: NomberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('норм посмотрел');
    } else if (personalMovieDB.count >= 30) {
        console.log('киноман');
    } else {
        console.log('er');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр ${i}`, '');
    }
}

writeYourGenres();