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
  })}

  if (order === "descending") {
      return copy.sort((a, b) => {
    if (a[key] < b[key]) {
      return 1;
    }
    if (a[key] > b[key]) {
      return -1;
    }
  })}
}

// SORT BY SCORE //
export const orderByScore = (data, order) => {
  const copy = [...data]
  const ascending = copy.sort((a, b) => a.rt_score - b.rt_score)
  if (order === "ascending") {
    return ascending
  }
  else {
    return ascending.reverse()
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

// CALCULO AGREGADO //
export function computeStats(total, parcial) {
  return ((parcial / total) * 100).toFixed(2);
};

