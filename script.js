"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('how much video did u watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('how much video did u watch?', '');
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('норм посмотрел');
        } else if (personalMovieDB.count >= 30) {
            console.log('киноман');
        } else {
            console.log('er');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр ${i}`, '');

            if ( genre == '' || genre == null) {
                console.log('На повтор');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};

console.log(personalMovieDB.count);




