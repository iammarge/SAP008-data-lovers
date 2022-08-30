//SORT//
// SORT CHARACTERS//
  // export const alphabeticOrderChars = (data, order) => {
  //  if (order === "asc_name") {
    // return data.sort((a,b) => {
      // const nameA = a.name;
       // const nameB = b.name;
      // if (nameA < nameB) {
       // return -1;
      // }
     //  if (nameA > nameB) {
      //   return 1;
     // }})
    // }
   // if (order === "desc_name") {
     // return data.sort((a, b) => {
    //  const nameA = a.name;
     // const nameB = b.name;
     // if (nameA > nameB) {
       // return -1;
     // }
     // if (nameA < nameB) {
       // return 1;
    //  }})
   // }
 // };

const filterDirectors = (data, value) => {
  data.filter((films) => {
    return data.value === director
  })

}


//   SORT MOVIES    //
// SORT BY A-Z / Z-A//
//export const alphabeticOrderMovies = (data, order) => {
 // if (order === "asc_title") {
  //return data.sort((a,b) => {
 //   const titleA = a[key];
   // const titleB = b.title;
   // if (titleA < titleB) {
    //  return -1;
   // }
   // if (titleA > titleB) {
    //  return 1;
   // }})
 // }
  // if (order === "desc_title") {
  //  return data.sort((a, b) => {
   // const titleA = a.title;
   // const titleB = b.title;
   // if (titleA > titleB) {
   //   return -1;
   // }
   // if (titleA < titleB) {
   //   return 1;
   // }})
 // }
// }
//

// SORT BY SCORE//
export const orderByKey = (data, key, order) => {
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
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
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


