import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {Link, useNavigate} from 'react-router-dom'
import new_release from "../assets/new_relaese.png";
import top_rated from  '../assets/top_rated.png'
const Cart = ({ data, tag, index,path }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const navigate=useNavigate();
  return (

    <Link to={"/"+(data.media_type|| path||'movie')+"/"+data.id} className='relative w-full min-w-[230px] max-w-[230px] h-auto rounded-2xl overflow-hidden hover:scale-105 block'>
      {
        data?.poster_path?(
          <img src={imageURL + data?.poster_path}/>
        ):(
          <div className='bg-neutral-800 h-full w-full flex justify-center'>

          </div>
        )
      }
     <div>
      {tag=='true' ? (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded ">
            #{index} Trending
          </div>) :tag=='new release'?<div className="absolute top-0 right-33 w-28" ><img src={new_release} alt="" /></div>:tag=='top rated'?
          <div className="absolute top-1 left-1 w-10" ><img src={top_rated} alt="" /></div>:
          <></>
        }
     </div>
        <div className='absolute bottom-0 h-16 w-full backdrop-blur-3xl bg-black/60 p-2 xs:hidden'>
          <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data.name || data.title}</h2>
          <div className='flex justify-between'>
            <p className='text-sm text-neutral-400'>{moment(data.release_date||data.first_air_date).format("MMM Do YY")|| 'Comming Soon'}</p>
            <p className='text-sm text-neutral-400'>Rating:{Number(data.vote_average).toFixed(1)}</p>
          </div>
        </div>
        
    </Link>
    
  );
};

export default Cart;
