import React from 'react'
import Name from './name'

export default ({data, favourites, deleteFavourite}) => {   //props passed write this way when you have more than one prop
  const hasFavourites = (favourites.length > 0)             //checks if there's something in the favourite array or not

  const Nameslist = favourites.map((fav, i) => {           //mapping fav and i with the id and info
    return(                                                //check name.js
  <Name
  id={i}
  key={i}
  info={data[fav]}
  handleFavourite={(id) => deleteFavourite(id)}
  />
)
  })
  return(
    <div className="favourites">
    <h4>
    {hasFavourites
      ? 'Your shortlist'
   : 'Click on a name to shortlist it...'
    }
    </h4>
    <ul>{Nameslist}</ul>
    {hasFavourites && <hr/>}
    </div>
  )
}
