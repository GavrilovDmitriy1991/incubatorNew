const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов", "");
  const b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }

  if (personalMovieDB.count < 10) {
    console.log(" to few films");
  } else if (personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
    console.log("you are cool watcher");
  } else if (personalMovieDB.count > 30) {
    console.log("you are kinoman");
  } else {
    console.log("error");
  }
}

console.log(personalMovieDB);
