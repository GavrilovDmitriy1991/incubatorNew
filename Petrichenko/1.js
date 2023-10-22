const NumberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?");

const personalMovieDB = {
  count: NumberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренних фильмов?", "");
const b = prompt("На сколько оцените его?", "");

const c = prompt("Один из последних просмотренних фильмов?", "");
const d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
