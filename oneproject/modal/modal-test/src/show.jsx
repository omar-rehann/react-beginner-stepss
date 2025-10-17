import { data } from "./data"
import Modal from "./modal"
function Showmodal(){
    let alldata=data.map(function(e,index){
 return <Modal key={index} name={e.name} text={e.title} />
    })
    return(
        <>
        <div>{alldata}</div>
        </>

    )
}
export default Showmodal