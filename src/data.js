// SORT BY KEY//
export const orderByKey = (data, key, order) => {
  const copy = [...data]
  if (order === "ascending") {
      return copy.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  })}

  if (order === "descending") {
      return copy.sort((a, b) => {
    if (a[key] < b[key]) {
      return 1;
    }
    if (a[key] > b[key]) {
      return -1;
    }
    return 0;
  })}
}

// SORT BY SCORE //
export const orderByScore = (data, order) => {
  const ascending = data.sort((a, b) => a.rt_score - b.rt_score)
  if (order === "ascending") {
    return ascending
  }
  else {
    return ascending.slice(0, 20).reverse()
  }
}


// SEARCH//

export const searchByKey = (data, key, value) => {
  const resultSearch = data.filter((item) => item[key].toLowerCase().includes(value.toLowerCase()));
  return resultSearch;
}

// FILTRO
export const filterSelect = (films, key, value) => {
  return films.filter ((select) => {
    return select[key] === value
  })
}

/* FILTRO GÊNERO
export const filterGender = (films, key,  gender) => {
  return films.filter ((chars) => {
    return chars[key] === gender
  })
}
*/

/*CALCULO PERSONAGENS
export const aggregateCal = (chars) => {
  const totalCharacters = chars.reduce((a, b) => (a + b))
  return {"total": totalCharacters};
}
*/
