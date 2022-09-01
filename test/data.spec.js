import { orderByKey } from '../src/data.js';

const movies = [
  {
    "title": "When Marnie Was There",
  },
  {
    "title": "Castle in the Sky",
  },
  {
    "title": "The Tale of the Princess Kaguya",
  },
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