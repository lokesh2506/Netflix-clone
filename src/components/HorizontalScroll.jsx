import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
import Card2 from './card2';

const HorizontalScroll = ({ data, heading,tag ,Loading,url,w500,media_type}) => {
  const movieScrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

 const handleKeyDown=(event)=>{
  if(!isHovered) return;
  if(event.key==='ArrowRight'){
    movieScrollRef.current.scrollBy({left:240,behaviour:'smooth'})
  }
  if(event.key==='ArrowLeft'){
    movieScrollRef.current.scrollBy({left:-240,behaviour:'smooth'})
  }
}

  useEffect(()=>{
    if(isHovered){
      window.addEventListener('keydown',handleKeyDown)
    }
    else{
      window.removeEventListener('keydown',handleKeyDown)
    }
    return ()=> {
      window.removeEventListener('keydown',handleKeyDown)};
  },[isHovered])

  
  return (
    <div className="mt-11 px-5">
      <h2 className="text-xl lg:text-2xl font-bold mb-5">{heading}</h2>

      <div
        className="flex gap-6 overflow-y-scroll scroll-smooth scrollbar-hide py-5"
        style={{ outline: 'none' }}
        ref={movieScrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
       {Loading ? (
          // Loading placeholder cards
          Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="xs:w-[230px] xs:h-[345px] bg-gray-300 rounded-2xl animate-pulse" />
          ))
        ) :!w500 ? (
          data.map((item, index) => (
            <Card key={item.id + heading + index} data={item} index={index + 1} tag={tag} imageURLhr={url} path={media_type}/>   
          ))
        ):(
          data.map((item, index) => (
            <Card2 key={item.id + heading + index} data={item} index={index + 1} tag={tag}/>   
          ))
        ) 
      
      }
      </div>
    </div>
  );
};

export default HorizontalScroll;
