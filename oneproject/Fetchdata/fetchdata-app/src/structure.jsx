import "./style.css"
function Structure(props){
    return(
        <div className="parent">
            <table>
                <thead>
                    <td>Id</td>
                    <td>USerID</td>
                    <td>Title</td>
                    <td>Body</td>
                </thead>
                <tbody>
                    <td>
                        {props.Id}

                    </td>
                    <td>
                                                {props.userId}


                    </td>
                    <td>
                                                {props.Title}


                    </td>
                    <td>
                                                {props.Body}

                    </td>
                   
                </tbody>
            </table>
        </div>

    )
}
export default Structure