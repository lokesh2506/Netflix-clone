import React, { useState , useEffect} from 'react'
import axios from 'axios';
 import Card from '../components/Card'
import { useParams } from 'react-router-dom';
const MovieExplore = () => {
    const params=useParams()
    const [pageNo,setPageNo]=useState(1)
    const [data,setData]=useState([])
    const [totalPages,setTotalPages]=useState(0);
    const fetchData=async()=>{
      try{
        const response=await axios.get(`/discover/tv`,{
          params:{page:pageNo}
        })
        setData((prev)=>{return [...prev,...response.data.results]})
        setTotalPages(response.data.total_pages)
      }
      catch(err){
        console.log(err)
      }
    }
   const handleScroll=()=>{
    if((window.innerHeight+window.scrollY)>=document.body.offsetHeight ){
      setPageNo((prev)=>prev+1)
    }
   }
   
  
    useEffect(()=>{
      fetchData()
    },[pageNo])
     useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
     },[])
    return (
      <div className='pt-1 mx-5'>
          <div className="container ">
           <h3 className='capitalize text-lg font font-semibold lg:text-2xl'>Popular movie show </h3>
         
           <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-3 gap-y-7 ms-6 mt-3  xs:justify-center'>
           {
             data.map((data,index)=>{
              return (
                <Card data={data} key={data.id+"movieExplore"} path={'movie'}/>
              )
            })
           }
          </div>      
         
          </div>
      </div>
    )
}

export default MovieExplore