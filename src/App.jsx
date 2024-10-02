import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import MobielNavigation from "./components/MobielNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData,setImageURL, setImageURLhz } from "../Store/movieSlice";



function App() {
  const dispatch=useDispatch();
const fetchTrendingData=async()=>{
  try {
    const response=await axios.get('/trending/all/week');
    dispatch(setBannerData(response.data.results))
    console.log(response.data);
    
    
  } catch (error) {
    console.log(error);
    
  }
}
const fetchConfiguration=async()=>{
  try {
    const response=await axios.get('/configuration');
    dispatch(setImageURL(response.data.images.secure_base_url+"original"));
    dispatch(setImageURLhz(response.data.images.secure_base_url+"w300"));
    
   console.log(response)
    
  } catch (error) {
    console.log(error );
    
  }
}

useEffect(()=>{
  fetchTrendingData();
  fetchConfiguration();
},[])
 
  return (
    <div className="pb-14 lg:pb-0 ">
       <Header/>
          <div className="mt-20 ">
              <Outlet/>  
          </div>
        <Footer className="px-5 "/>
       <div className=" fixed lg:hidden">
          <MobielNavigation/>
       </div>
 </div>
   
  )
}

export  default App;