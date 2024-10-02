import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {Link, useNavigate} from 'react-router-dom'
import new_release from "../assets/new_relaese.png";
import top_rated from  '../assets/top_rated.png'
const Card2 = ({ data, tag, index }) => {
const imageURLhr=useSelector((state)=>state.movieData.imageURLhz)

  return (

    <Link to={"/"+(data.media_type|| 'tv')+"/"+data.id} className='relative w-full min-w-[300px] max-w-[500px] h-auto rounded-2xl overflow-hidden hover:scale-105'>
      <img src={imageURLhr + data.backdrop_path}/>
      
        
    </Link>
    
  );
};

export default Card2;
