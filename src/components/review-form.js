import React from "react";
import { useState } from "react";
import "../App.css";

const ReviewForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        const submitReview = { title, body};

        console.log(submitReview)
    }

    return (
        <div className="reviewform">
            <h5>Leave a Review!</h5>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}                
                />
                <label>Review:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <br></br>
                <br></br>
                <button>Submit</button>
                <p>{ title }</p>
                <p>{ body }</p>
            </form>
        </div>
    );
}

export default ReviewForm;