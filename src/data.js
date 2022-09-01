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
