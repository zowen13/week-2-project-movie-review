import React from "react";
import StarRating from "./star-rating";
import Movie from "./movie";
import Review from "./review";


export default class MovieList extends React.Component {
    render() {

        return (
            <div className="container">
                <Movie {...{content: ' - Avengers'}}/>
                <br></br>
                <Movie {...{content: ' - Avengers: Age of Ultron'}}/>
                <br></br>
                <Movie {...{content: ' - Avengers: Infinity War'}}/>
                <br></br>
                <Movie {...{content: ' - Avengers: Endgame'}}/>
            </div>
        );
    }
} 