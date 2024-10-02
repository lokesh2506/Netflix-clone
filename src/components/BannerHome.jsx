import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleLeft, FaAngleRight} from "react-icons/fa6";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const[currentImage,setCurrentImage]=useState(0);
 
  const handlePrevious=()=>{
   if(currentImage>=0){
    setCurrentImage(prev=>prev-1);
   }
  }
  const handleNext=()=>{
    if(currentImage<bannerData.length-1){
      setCurrentImage(prev=>prev+1);
    }
  }


  
  useEffect(()=>{
    const interval=setInterval(()=>{
      if(currentImage<bannerData.length-1){
        handleNext();
      }
      else{
        setCurrentImage(0);
      }
    },3000)
    return ()=> {clearInterval(interval) 
      }
    
  },[][currentImage])
  
  return (
    
      <div className=' flex relative w-full h-[33vh] overflow-y-hidden md:min-h-[40vh] lg:h-[88.5vh] overflow-hidden group '>
        {
          bannerData.map((data) => {
            return (
             
              <div key={data.id} className='relative min-w-full min-h-full transition-all' style={{ transform: `translateX(-${currentImage * 100}%)`}}>
              <img
                  src={imageURL + data.backdrop_path}
                  alt=''
                  className='object-fill w-full h-full ' 
                />
                
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-800 to-transparent "></div>
              <div className="container my-5 absolute bottom-0 max-w-md px-5">
                  <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data.name||data.title}</h2>
                  <p className='text-ellipsis line-clamp-1 my-2 lg:line-clamp-3'>{data.overview}</p>
                  <div className="flex items-center gap-4">
                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                    <span> | </span>
                    <p>View : {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <button className='bg-white text-black font-bold px-4 py-2 mt-2 rounded-lg hover:text-white hover:bg-gradient-to-l from-red-800 to-rose-600 hover:transition-all hover:scale-105'>Play Now</button>
              </div>
            </div>
            )
          })
        }
        <div className='absolute top-0 flex w-full h-full hidden items-center justify-between z-10 px-2 group-hover:lg:flex'>
                  <button onClick={handlePrevious} className='bg-white p-1 rounded-full text-xl z-10 text-black'><FaAngleLeft/></button>
                  <button onClick={handleNext} className='bg-white p-1 rounded-full text-xl z-10 text-black'> <FaAngleRight/></button>
        </div>
       
      </div>
      
  );
}

export default BannerHome;     