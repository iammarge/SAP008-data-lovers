import { orderByKey , orderByScore, searchByKey, filterSelect } from '../src/data.js';

const movies = [
  {
    "title": "When Marnie Was There",
    "rt_score": "92",
  },
  {
    "title": "Castle in the Sky",
    "rt_score": "95",
  },
  {
    "title": "The Tale of the Princess Kaguya",
    "rt_score": "100",
  }
]

const characters = [
  {
    "name": "Dola",
    "gender": "Female",
  },
  { "name": "Kazuhiko",
    "gender": "Male",
  },
  { "name": "Kaguya",
    "gender": "Female",
  }
]

describe ('orderByKey', function () {
  it('deve ordenar em ordem alfabética', function(){
    const order = orderByKey (movies,'title', 'ascending')
    expect(order.length).toEqual(movies.length)
    expect(order).toEqual([
      movies[1],
      movies[2],
      movies[0]
    ])
  })
  it('deve ordenar em ordem alfabética inversa', function(){
    const order = orderByKey (movies,'title', 'descending')
    expect(order.length).toEqual(movies.length)
    expect(order).toEqual([
      movies[0],
      movies[2],
      movies[1]
    ])
  })
})

describe ('orderByScore', function () {
  it('deve ordenar em ordem de notas de avaliação crescente', function(){
    const order = orderByScore (movies, 'ascending')
    expect(order.length).toEqual(movies.length)
    expect(order).toEqual([
      movies[0],
      movies[1],
      movies[2]
    ])
  })
    it('deve ordenar em ordem de notas de avaliação decrescente', function(){
      const order = orderByScore (movies, 'descending')
      expect(order.length).toEqual(movies.length)
      expect(order).toEqual([
        movies[2],
        movies[1],
        movies[0]
      ])
    })
})

describe ('searchByKey', function () {
  it ('deve buscar por palavra', function() {
    const search = searchByKey (movies, 'title', 'Tale')
    expect(search.length).toEqual(1)
    expect(search).toEqual([movies[2]])
  })
})

describe ('filterSelect', function (){
  it ('deve filtrar por genero feminino', function (){
    const filter = filterSelect (characters, 'gender', 'Female')
    expect(filter.length).toEqual(2)
    expect(filter).toEqual([
      characters[0],
      characters[2],
    ])
  })
})
