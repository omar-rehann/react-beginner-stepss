import { use, useEffect, useState } from "react"
import Structure from "./structure"
import axios from "axios";
function Data(){
    const [data,setdata]=useState([]);
    const[eror,seteroro]=useState('')
     useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setdata(response.data); 
      })
      .catch((err) => {
        seteroro(eror.message);
      });
  }, []);
    return(
        <>
        {
            data.map((e,i) =>{
             return(   <Structure key={i} Id={e.id} userId={e.userId} Title={e.title} Body={e.body}  />)
            })
        }
        </>
    )
}
export default Data