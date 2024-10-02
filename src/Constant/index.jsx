import { PiTelevision } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";



export const navigation=[
    {
        label:"TV Shows",
        href:"tv",
        icon:<PiTelevision/>
    },
    {
        label:"Movies",
        href:"movie",
        icon:<BiSolidCameraMovie/>
    }
]
 export const MoblieNavigation=[
    {
        label:"Home",
        href:"/",
        icon:<IoHome/>
    },
    ...navigation,
    {
        label:"search",
        href:"/search",
        icon:<FaMagnifyingGlass/>
    }
]