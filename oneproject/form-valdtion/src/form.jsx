import "./styles/form.css"
import { useState } from "react"
import Swal from "sweetalert2";

function Form(){
    const[user,setuser]=useState('');
    const[email,setemail]=useState('');
    const[password,setpass]=useState('');
    const[rep,setrep]=useState('');
    const[check,setcheck]=useState(false)
    function handle(e){
        e.preventDefault()
        if(user ==="" || email ==="" || password===""|| rep===""){
             Swal.fire({
        title: "تحذير!",
        text: "من فضلك املأ كل البيانات المطلوبة ⚠️",
        icon: "warning",
        confirmButtonText: "حسناً"
      });

        }else{
             Swal.fire({
      title: "تم بنجاح!",
      text: "تم حفظ البيانات بنجاح 🎉",
      icon: "success",
      confirmButtonText: "تمام"
    });
     setuser("")
        }

    }
  
    

    
    return(
        <>
        <div className="parent">
            <form action="">
                <label htmlFor="">UserName</label>
                <input type="text" onChange={(e)=>setuser(e.currentTarget.value)} value={user} placeholder="Enter Name" name="" id="" />
                {user==="" && check && <p className="eror">Not Vladtion input try again</p>}
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=>setemail(e.currentTarget.value)} value={email} name="" id="" placeholder="Enter Email" />
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e)=>setpass(e.currentTarget.value)} value={password} name="" id=""  placeholder="Enter password"/>


                 <label htmlFor="">Repeat Password</label>
                <input type="password" onChange={(e)=>setrep(e.currentTarget.value)} value={rep} name="" id="" placeholder="Repeat password" />

                <button onClick={handle}>Send Informtion</button>
            </form>
        </div>
        </>
    )
}
export default Form