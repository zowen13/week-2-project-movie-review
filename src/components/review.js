import React from "react";
import StarRating from "./star-rating";

export default class Review extends React.Component {
    render () {
        return(
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    <StarRating /> 
                </div>
                {/* <div className="card-body">
                    {this.props.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div> */}
            </div>
        );
    }
}