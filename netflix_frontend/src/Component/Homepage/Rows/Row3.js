import React from 'react'
import './Row2.css'
import The_good_doctor from '../Pictures/The_good_doctor.PNG'
import Jamtara from '../Pictures/Jamtara.PNG'
import Delhi_crime from '../Pictures/Delhi_crime.PNG'
import Sacred_game from '../Pictures/Sacred_game.PNG'
import Khake from '../Pictures/Khake.PNG'
import Black_list from '../Pictures/Black_list.PNG'
import movies_collection from '../Movies_collection'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
function Row1({ title }) {
  let new_releases = []
  for (let i = 0; i < movies_collection.length; i++) {
    if (movies_collection[i].category === 'new releases') {
      new_releases.push(movies_collection[i])
    }
  }

  return (
    <div id='container'>

      {/*--------- Movies title----------- */}

      <h2>{title}</h2>

      {/*--------- End----------- */}

      {/*--------- Movies posterss----------- */}
      <div id='poster'>
        {new_releases.map(movie => (
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