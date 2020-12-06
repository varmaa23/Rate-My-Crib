const AddyDescription = () => {
    return(
        <div className = "addyBox">
            <p>write ur addy:</p>
            <input type="text" placeholder = "address"></input>
            <input type="text" placeholder = "city"></input>
            <input type="text" placeholder = "state"></input>
            <input type="text" placeholder = "country"></input>
            <p>description</p>
            <textarea rows="20" cols="55"></textarea>
        </div>
        
    )
}


export default AddyDescription;