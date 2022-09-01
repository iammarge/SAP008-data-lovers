import { orderByKey, searchByKey, filterDirectors } from './data.js';
import data from './data/ghibli/ghibli.js';

// Lógica mostrar filmes

let movies = data.films;
const info = document.querySelector('#cards');

function showFilms(data) {
  const films = data.map((item) => {
    const structure = `
       <div class="cardFront">
       <p class="titleOfFilm"><strong>${item.title}</strong></p>
         <button class= "btn" type="button">
         <img src="${item.poster}"class="poster-card">
        </button>
   </div>
      `;
    return structure;
  });
  return films.join('');
}

function printInfos(item) {
  return `
  <div class="cardBack">
         <ul class="cardInfos" style="list-style: none;">
           <li><strong>${item.title}</strong></li>
           <li><strong>Description: </strong>${item.description}</li>
           <li><strong>Director: </strong>${item.director}</li>
           <li><strong>Producer: </strong>${item.producer}</li>
           <li><strong>Release date: </strong>${item.release_date}</li>
           <li><strong>Score: </strong>${item.rt_score}</li>
         </ul>
         <button class="close">Sair</button>
        </div>
        
showFilms(movies);
  `
}

function infoCard(movies) {
  const show = document.querySelector('.backInfos');
  show.innerHTML = showFilms(movies);

  const button = document.querySelectorAll('.btn');

  for (let i = 0; i < movies.length; i++) {
    const showInfo = value(movies[i]);
    button[i].addEventListener('click', showInfo);
  }
}
infoCard(movies);

function value(data) {
  return function () {
    info.innerHTML = printInfos(data);
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', btnShowInfos);
    showInfo();
  }
}

info.addEventListener('click', view);

function showInfo() {
  info.style.display = "block";
}
function btnShowInfos() {
  info.style.display = "none";
}
function view(e) {
  if (e.target == info) {
    info.style.display = "none";
  }
}


//ORDER BY ALPHABETIC //

const selectElement = document.querySelector('.titleFilms');

selectElement.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(movies, 'title', value)
  infoCard(orderedList)
});

//ORDER BY RELEASE DATE //

const selectElementDate = document.querySelector('.releaseDate');

selectElementDate.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(movies, 'release_date', value)
  infoCard(orderedList)
});

//ORDER BY SCORE //

const selectElementScore = document.querySelector('.score');

selectElementScore.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(movies, 'rt_score', value)
  infoCard(orderedList)
});

//SEARCH FILMS//
const searchTitles = document.getElementById("txtSearch");
function filtroPesquisa(event) {
  const filmsByTitle = searchByKey(movies, 'title', event.target.value);
  infoCard(filmsByTitle);
}
searchTitles.addEventListener("keyup", filtroPesquisa);

// ORDENAÇÃO DIRETORES//

const selectDirector = document.querySelector('.directors');
selectDirector.addEventListener('change', (event) => {
  const value = event.target.value
  const directorFilter = filterDirectors(movies, value)
  infoCard(directorFilter)
});

