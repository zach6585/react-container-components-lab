import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {
    _isMounted = false;
    constructor(){
        super()
        this.state = {
            reviews: []
        }

    }


    componentDidMount() {
      this._isMounted = true;
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=pJcr3OKeJGiRgVB8rTCu7iiT5wgvhG3S")
        .then(response => response.json())
        .then(data => {
          if (this._isMounted) {
                 this.setState({reviews: [data.results[0].summary_short, data.results[1].summary_short]})
          }
        })
}
    componentWillUnmount() {
      this._isMounted = false;
    }


    render() {
        return(<div className="latest-movie-reviews">{this.state.reviews}</div>)
    }
}
