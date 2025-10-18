import "./style.css"
import { useState } from "react";
function Navbar() {
  const [active,setactive]=useState(false);
  function toggle(){
    setactive(!active)
  }
  return (
    
  <>
    <div className="navbar">
      <div className="logo">
        <h2>Omar Rehan</h2>
      </div>

<div className={`links ${active ? "active" : ""}`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>

       
      </div>
       <div className="icon" onClick={toggle}>
          <i className={` ${active ? "fa-splid fa-x" : "fa-solid fa-bars"}`}></i>
        </div>
    </div>
  </>
  );
}

export default Navbar;
