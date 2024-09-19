import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import MobielNavigation from "./components/MobielNavigation";

function App() {
  return (
   <div className="pb-14 lg:pb-0">
      <Header/>
        <div className="mt-20 ">
            <Outlet/>
        </div>
      <Footer/>
      <MobielNavigation/>
   </div>
   
  )
}

export  default App;