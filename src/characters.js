import { orderByKey, searchByKey, filterSelect, computeStats } from './data.js';
import data from './data/ghibli/ghibli.js';
let movies = data.films
const divMessage = document.querySelector('.message');
let characters = movies.reduce(function (chars, film) {
  const people = film.people.map(function (char) {
    char.title = film.title

    return char
  });
  return chars.concat(people)

}, []);

function showCharacters(data) {
  const charactersInfo = data.map((item) => {
    return `
  <div class="cardStructure">
          <p class="charactersName"><strong>${item.name}</strong></p>
          <img src="${item.img}"class="posterCharacters">
         <ul class="cardInfos">
           <li><strong>Gender: </strong>${item.gender}</li>
           <li><strong>Age: </strong>${item.age}</li>
           <li><strong>Eye color: </strong>${item.eye_color}</li>
           <li><strong>Hair color: </strong>${item.hair_color}</li>
           <li><strong>Specie: </strong>${item.specie}</li>
         </ul>
          </div>

  `}).join('')

  document.getElementById('cards').innerHTML = charactersInfo;
}

showCharacters(characters)

//SORT BY ALPHABETIC //
const selectElement = document.querySelector('.charactersName');

selectElement.addEventListener('change', (event) => {
  const value = event.target.value
  const orderedList = orderByKey(characters, 'name', value)
  showCharacters(orderedList)
});

//SEARCH CHARACTERS//
const searchNames = document.getElementById("txtSearch");
function filtroPesquisa(event) {
  const charactersByName = searchByKey(characters, 'name', event.target.value);
  showCharacters(charactersByName);
}
searchNames.addEventListener("keyup", filtroPesquisa);

// ORDENAÇÃO GÊNERO
const selectGender = document.querySelector('.selectGender');
selectGender.addEventListener('change', (event) => {
  const value = event.target.value
  if (value === "gender") {
    showCharacters(characters) 
    divMessage.innerHTML = ""
    return
  }
  const genderFilter = filterSelect(characters, 'gender', value)
  const percentage = computeStats(characters.length, genderFilter.length)
  const message = ` ${genderFilter.length} personagens são do gênero ${value} , que representam ${percentage}% do total de personagens do Studio Ghibli `
  divMessage.innerHTML= message
  showCharacters(genderFilter)
});
