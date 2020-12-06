import Factor from "./factors";

const FactorsList = (props) => {
    return(
        // What do I want to do? I want to create a space
        // for people to write the address
        // And a verbal description of the house. 
        <ol>
            {props.factors.map((factor, index) => {
                const rating = props.ratings[index];

                return (
                    <Factor
                ratingChangeHandler={(text, newRating) => props.ratingChangeHandler(text, newRating)}
                factor = {factor.toLowerCase()}
                rating = {rating}/>
                )
            })}
        </ol>
    )
}

export default FactorsList;