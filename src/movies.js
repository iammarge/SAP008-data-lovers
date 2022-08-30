import { orderByKey , searchByKey} from './data.js';
import data from './data/ghibli/ghibli.js';

// Lógica mostrar filmes //
let movies = data.films

function showFilms(data) {
  const filmsInfo = data.map((item) => {
    return `
  <div class="cardStructure">
         <div class="cardFront">
          <p class="titleOfFilm"><strong>${item.title}</strong></p>
          <img src="${item.poster}"class="poster-card">
         </div>
        <div class="cardBack">
         <ul class="cardInfos">
           <li><strong>${item.title}</strong></li>
           <li><strong>Description: </strong>${item.description}</li>
           <li><strong>Director: </strong>${item.director}</li>
           <li><strong>Producer: </strong>${item.producer}</li>
           <li><strong>Release date: </strong>${item.release_date}</li>
           <li><strong>Score: </strong>${item.rt_score}</li>
         </ul>
          </div>
        </div>
  `}).join('')

  document.getElementById('cards').innerHTML = filmsInfo
}

showFilms(movies);

//ORDER BY ALPHABETIC //

const selectElement = document.querySelector('.titleFilms');

selectElement.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(movies, 'title' , value)
  showFilms(orderedList)
});

//ORDER BY RELEASE DATE //

const selectElementDate = document.querySelector('.releaseDate');

selectElementDate.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(movies, 'release_date' , value)
  showFilms(orderedList)
});

//ORDER BY SCORE //

const selectElementScore = document.querySelector('.score');

selectElementScore.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(movies, 'rt_score' , value)
  showFilms(orderedList)
});

//SEARCH FILMS//
const searchTitles = document.getElementById("txtSearch");
function filtroPesquisa(event) {
  const filmsByTitle = searchByKey(movies, 'title', event.target.value);
  showFilms(filmsByTitle);
}
searchTitles.addEventListener("keyup", filtroPesquisa);

// ORDENAÇÃO DIRETORES//

