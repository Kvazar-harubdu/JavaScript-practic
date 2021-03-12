'use strict';
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//       // c = prompt('Один из последних просмотренных фильмов?', ''),
//       // d = prompt('На сколько оцените его?', '');

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('good');
    } else {
      console.log('error');
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonslLevel() {
  if (personalMovieDB.count < 10) {
    console.log('more');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log('very big');
  } else if (personalMovieDB.count >= 30) {
    console.log('well done');
  } else {
    console.log('error');
  }
}
detectPersonslLevel();

function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);
// personalMovieDB.movies[c] = d;

function writeYourGeners() {
  for(let i = 1; i <= 3; i++) {
    const gad = prompt(`Ваш любимий фильм? ${i}`);
    personalMovieDB.genres[i-1] = gad;
  }
}
writeYourGeners();

// console.log(personalMovieDB);