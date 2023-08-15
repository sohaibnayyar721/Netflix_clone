import React from 'react'
import './Row2.css'
import movies_collection from '../Movies_collection'

function Row1({ title }) {
  let series = []
  for (let i = 0; i < movies_collection.length; i++) {
    if (movies_collection[i].category === 'series') {
      series.push(movies_collection[i])
    }
  }

  return (
    <div id='container'>

      {/*--------- Movies title----------- */}

      <h2>{title}</h2>

      {/*--------- End----------- */}

      {/*--------- Movies posterss----------- */}
      <div id='poster'>
        {series.map(movie => (
          <div key={movie.id} id='card_container'>
            <div key={movie.id} id='banner'>
              <img key={movie.id} src={movie.image}></img>
            </div>
          </div>
        ))
        }
      </div>
      {/*--------- End----------- */}

    </div>
  )
}

export default Row1;