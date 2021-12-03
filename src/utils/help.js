import {FaHome,FaSearch,FaPlus,FaStar,FaTv} from "react-icons/fa";
import {BiMovie} from "react-icons/bi";

const headerList=[
    {id:1,text:"home",icons:<FaHome/> },
    {id:2,text:"search",icons:<FaSearch/> },
    {id:3,text:"watchlist",icons:<FaPlus/> },
    {id:4,text:"originals",icons:<FaStar/> },
    {id:5,text:"movies",icons:<BiMovie/> },
    {id:6,text:"series",icons:<FaTv/> },
]

export {headerList};