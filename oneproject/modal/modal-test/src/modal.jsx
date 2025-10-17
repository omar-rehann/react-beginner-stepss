import "./style.css";
import { useState } from "react";

function Modal(props) {
  const [active, setActive] = useState(false); 

  function close() {
    setActive(true); 
  }

  return (
    <div className={`parent ${active ? 'active' : ""}`}>
      <h4 className="name">{props.name}</h4>
      <h5 className="title">{props.text}</h5>
      <h2 className="close" onClick={close}>X</h2>
    </div>
  );
}

export default Modal;
