const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjgzMmI4ODY5ZTE4MWViZTkyMTJmMmI4ZTlmYThkYiIsIm5iZiI6MTcyMjE3NDE5My4wNzYxODEsInN1YiI6IjY2YTMzOTY2MzFkNTM0ZWU0YjYxNDA5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bH_gcQcgYOr0RMt52EwtjeU4aWfW5ECx2kGmnUP-oQU'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

document.("wrap").onclick = function () {
  alert('"영화id:" + ${id}')
};


const movies = ['back']

//const filterdMovies = moovies.filter((movie) => movie.includes("제목"));

const searchFilter = (data, keyword) => {
  return movies.filter((item) => movie.includes(keyword));
};

//const filterdMovies = serchFilter(movies,"제");
// 필터기능 ================================

// 어레이 안에 있는 요소들 html에 매핑하기
const conatiner = document.querySelector(".container");

conatiner.innerHTML = movies.map((movie)=>'<li>${movie}</li>').join("");

// 검색 input 부분
const input = document.querySelector(".input");
input.addEventListener("keyup", (e) => {
  const keyword = e.target.value;
  const filterMovies = searchFilter(movies, keyword);
  conatiner.innerHTML = filterdMovies
  .map((movie) => '<li>${movie}</li>')
  .join("");
});


$("#card_box").

