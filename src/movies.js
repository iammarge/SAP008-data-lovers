import { orderByKey, searchByKey, filterSelect, orderByScore, computeStats } from './data.js';
import data from './data/ghibli/ghibli.js';

// Lógica mostrar filmes

let movies = data.films;
const info = document.querySelector('#card');
const divMessage = document.querySelector('.message');

function showFilms(data) {
  const films = data.map((item) => {
    const structure = `
      <li class="poster">
        <strong class="titleOfFilm">${item.title}</strong>
         <button class= "btn" type="button">
          <img src="${item.poster}"class="posterCard">
        </button>
      </li>
      `;
    return structure;
  });
  return films.join('');
}

function printInfos(item) {
  return `
   <div class="infoCards">
      <ul class="cardInfo" style="list-style: none;">
        <li><strong>${item.title}</strong></li>
        <li><strong>Description: </strong>${item.description}</li>
        <li><strong>Director: </strong>${item.director}</li>
        <li><strong>Producer: </strong>${item.producer}</li>
        <li><strong>Release date: </strong>${item.release_date}</li>
        <li><strong>Score: </strong>${item.rt_score}</li>
      </ul>
      <button class="close">Fechar</button>
    </div>
  `
}

function infoCard(movies) {
  const show = document.querySelector('.infos');
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
  if (value === "orderTitle") {
    infoCard(movies) 
    return
  }
  const orderedList = orderByKey(movies, 'title', value)
  infoCard(orderedList)
});

//ORDER BY RELEASE DATE //

const selectElementDate = document.querySelector('.releaseDate');

selectElementDate.addEventListener('change', (event) => {
  const value = event.target.value
  if (value === "orderDate") {
    infoCard(movies) 
    return
  }
  const orderedList = orderByKey(movies, 'release_date', value)
  infoCard(orderedList)
});

//ORDER BY SCORE //

const selectElementScore = document.querySelector('.score');

selectElementScore.addEventListener('change', (event) => {
  const value = event.target.value
  if (value === "orderScore") {
    infoCard(movies) 
    return
  }
  const orderedList = orderByScore(movies, value)
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
  const directorName = event.target.value
  if (directorName === "") {
    infoCard(movies) 
    divMessage.innerHTML = ""
    return
  }
  const directorFilter = filterSelect(movies, 'director', directorName)
  const percentage = computeStats(movies.length, directorFilter.length)
  const message = `${directorName} dirigiu ${directorFilter.length} filmes, que representam ${percentage}% do total de filmes `
  divMessage.innerHTML= message
  infoCard(directorFilter)
});


