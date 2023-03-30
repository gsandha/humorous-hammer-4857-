import axios from 'axios';
import {useState} from 'react';
import { Input } from '@chakra-ui/react'

const Search = () => {
    const [prod,setProd]= useState([]);
    const [title,setTitle]= useState("");
    
const handleChange=async(e)=>{
    setTitle(e.target.value);
    
}
// setProd(title)


  return (
    <div>
     {/* <h1>This is the thing</h1> */}
     <Input placeholder='Basic usage' onChange={handleChange}/>
     {
        prod.length>0?prod.map((el)=>(
            <p>{el}</p>
        )):<h1>Nothing</h1>
     }
     
     </div>
  )
}

export default Search
