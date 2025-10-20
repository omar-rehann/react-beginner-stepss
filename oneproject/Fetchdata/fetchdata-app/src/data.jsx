import { useEffect, useState } from "react"
import Structure from "./structure"
import axios from "axios";
function Data(){
    const [data,setdata]=useState([]);
    const[eror,seteroro]=useState('');
    const[value,setvalue]=useState('')
     useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setdata(response.data); 
      })
      .catch((eror) => {
        seteroro(eror.message);
      });
  }, []);
 const post = data.filter((e) =>
  e.title.toLowerCase().includes(value.toLowerCase())
);

    return(
        <>
        <div className="title">Fetch Data in table</div>
        <input type="text" placeholder="Search In Table" onChange={(e)=>setvalue(e.target.value)} name="" id="" />
        {
            post.map((e,i) =>{
             return(   <Structure key={i} Id={e.id} userId={e.userId} Title={e.title} Body={e.body}  />)
            })
        }
        </>
    )
}
export default Data