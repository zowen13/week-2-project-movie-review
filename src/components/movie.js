import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            content: props.content
        };
    }

    render () {
    
        let reviews = [];
        if (this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review}/>);
        }

      

        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Movie Name
                </div>
                <div className="card-body">
                    Review Form
                    {this.state.content}
                    <ReviewList />
                </div>
            </div>
        )
        
    }
}