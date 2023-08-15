import React, { useEffect, useState} from 'react'
import './Row2.css'
import movies_collection from '../Movies_collection'

function Row1(props) {
  let trending_now = []
  for (let i = 0; i < movies_collection.length; i++) {
    if (movies_collection[i].category === 'trending now') {
      trending_now.push(movies_collection[i])
    }
  }
  let [after_add, set_after_add] = useState(false)
  let [mylist, set_mylist] = useState([])

  let [add, set_add] = useState(true)
  let [remove_add, set_remove_add] = useState(false)

  function favs(item) {
    set_mylist((fav_item) => [...fav_item, item])
    set_after_add(true)

  }

  function remove_fav(item) {
    let rem = mylist.filter((movie) => movie.id !== item.id)
    set_mylist(rem)
    set_add(false)
    set_remove_add(true)
  }
  
  // -------send data to homescreen---------
  useEffect(() => {
    props.favss(mylist)
  })

  return (
    <div id='container_trending'>
      <h2> {props.title}</h2>

      {/*--------- Movies posterss----------- */}
      <div id='poster'>
        {trending_now.map(movie => (
          <div key={movie.id} id='card_container'>
            <div key={movie.id} id='banner'>
              <img  key={movie.id} src={movie.image}></img>
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