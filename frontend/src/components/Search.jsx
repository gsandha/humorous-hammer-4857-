
import {useState} from 'react';
import { Input } from '@chakra-ui/react'

const Search = () => {
const [title,setTitle]= useState("");
let [prod,setProd]=useState([]);
  
const handleChange=async(e)=>{
    setTitle(e.target.value);
  let res=   await fetch(`http://www.omdbapi.com/?s=${title}&apikey=e28acac9`)
  // let res= await fetch(`https://fakestoreapi.com/products`)
  let data = await res.json();
  console.log(data.Search);
  setProd(data.Search)
  }
 


  return (
    <div style={{width:"45%", display:"block"}}>

     {/* <h1>This is the thing</h1> */}
     <Input  placeholder='Search Products' onChange={handleChange}/>
     
     {
        prod?prod.map((el)=>(
             <p style={{textAlign:"left"}} key={el.id}>{el.Title}</p>
        )):<h1></h1>

     }
     
     
     </div>
  )
}

export default Search
