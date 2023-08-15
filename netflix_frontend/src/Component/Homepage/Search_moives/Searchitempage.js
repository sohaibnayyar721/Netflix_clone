import React from 'react'
import './Searchitempage.css';
// import Breaking_Bad from './Search_moives/Pictures/Breaking_Bad.png'
import movies_collection from '../Movies_collection';
function Searchitempage() {
    return (
        <div className='mains'>
            <div className='containerss'>
                {movies_collection
                
                .map(movie=>(
                    <img key={movie.id} src={movie.image}></img>
                ))
                }
            </div>
        </div>
    )
}

export default Searchitempage