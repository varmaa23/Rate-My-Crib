import ReactStars from "react-rating-stars-component";



const Factor = (props) => {
    // we want to display the value right next to it
    return (
        <li className = "factor">
            <p>{props.factor}</p>
            <ReactStars
                classNames="stars" 
                count = {10}
                value = {0}
                color = "white"
                activeColor="#3C145B"
                size={50}
                isHalf={true}
                onChange={(newRating) => props.ratingChangeHandler(props.factor, newRating)}
                ></ReactStars>
            <p>rating: {props.rating.rating * 10}%</p>
        </li>
      
    )
}

export default Factor;