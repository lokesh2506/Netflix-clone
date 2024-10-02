import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card';
  
const SearchPage = () => {
  const location=useLocation();
  const [data,setData]=useState([])
  const [page,setPage]=useState(1);
  const navigate=useNavigate()
console.log(location)
  const fetchData=async()=>{
    try{
      const response=await axios.get(`search/multi`,{
        params:{
          query:location?.search?.slice(3),
          page:page,
        }
      })
      setData((prev)=>{return [...prev,...response.data.results]})
      
    }
    catch(err){
      console.log(err)
    }
  }
  const handleScroll=()=>{
    if((window.innerHeight+window.scrollY)>=document.body.offsetHeight ){
      setPage((prev)=>prev+1)
    }
   }
   
  
    useEffect(()=>{
      fetchData()
    },[page])

     useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
     },[])

  useEffect(()=>{
    setPage(1)
    setData([])
    fetchData()
  },[location.search])
   
  return (
   
      <div className='mx-5 pt-3'> 
        <div className='lg:hidden my-5 sticky top-20 z-50'>
           <input type="text" 
          placeholder='Search here...' 
          onClick={(e)=>navigate(`/search?q=${e.target.value}`)}
          className='px-4 py-4 text-lg w-full bg-neutral-700 border-none outline-none rounded-lg xs:py-2' />
        </div>

        {
          data.length>0 ?<h3 className='capitalize text-lg lg:text-xl font semibold my-3'>Search Results</h3>:<></>
        }
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-3 gap-y-7 ms-6 mt-3 justify-center'>
              {
              data.map((data,index)=>{
                return (
                  <Card data={data} key={data.id+"searchMovie"} />
                )
              })
            }
          </div>    
      </div>

 
  )
}

export default SearchPage