import React from 'react'
import './Row2.css'
import movies_collection from '../Movies_collection'
function Row1({ title }) {
  let action_and_adventure = []
  for (let i = 0; i < movies_collection.length; i++) {
    if (movies_collection[i].category === 'action and adventure') {
      action_and_adventure.push(movies_collection[i])
    }
  }

  return (
    <div id='container'>

      {/*--------- Movies title----------- */}

      <h2>{title}</h2>

      {/*--------- End----------- */}

      {/*--------- Movies posterss----------- */}
      <div id='poster'>
        {action_and_adventure.map(movie => (
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

export default Row1