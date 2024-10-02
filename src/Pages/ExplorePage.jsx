import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MovieExplore from '../components/movieExplore';
import TvExplore from '../components/TvExplore';
const ExplorePage = () => {
  const params=useParams();
 
 return(
  <>
      {params.explore == 'movie' ? <MovieExplore/>: <TvExplore />}
    </>

 )
}

export default ExplorePage