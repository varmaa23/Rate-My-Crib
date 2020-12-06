import React, { Component } from 'react';
import FactorsList from "./factors_list";
import AddyDescription from './addy_description';
import { factors, ratings_initial } from '../globals'

class NewEntryPage extends Component {

  constructor(props) {
    super(props)
    this.ratingChangeHandler = this.ratingChangeHandler.bind(this)
    this.state = {
      ratings: ratings_initial
    }
}
  

  ratingChangeHandler(id,newRating) {
    const rateIndex = this.state.ratings.findIndex((rate) =>  {
      return rate.id === id;
    })

    const newRatings = this.state.ratings.slice()
    newRatings[rateIndex] = {
      id: id,
      rating: newRating
    }
    this.setState((prevState) => ({
      ratings: newRatings
    }))
  }

  render () {
    return (
      <div>
        <AddyDescription/>
        <FactorsList
          factors={factors}
          ratingChangeHandler={this.ratingChangeHandler}
          ratings={this.state.ratings}
        ></FactorsList>
      </div>
      
    )
  }
  
}

export default NewEntryPage;