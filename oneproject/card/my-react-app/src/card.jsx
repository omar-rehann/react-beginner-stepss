function Card(props){
    return(
        <>
         <div className="continer">
                <h2>Hello To Come Card from Data</h2>
            </div>
        <div className="parent">
           
            <div className="content">
                <div className="box">
                    <img src={props.src} alt="" />
                    <h2>{props.name}</h2>
                    <h3>{props.text}</h3>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card