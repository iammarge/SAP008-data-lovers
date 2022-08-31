
//filtro direção
export const filterDirectors = (films, director) => {
  return films.filter ((film) => {
    return film.director === director
  })

}

// SORT BY KEY//
export const orderByKey = (data, key, order) => {
  console.log(data, key, order)
  if (order === "ascending") {
      return data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  })}

  if (order === "descending") {
      return data.sort((a, b) => {
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



