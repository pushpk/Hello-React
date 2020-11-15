import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';

const CommnetDetail = () => {

    return(
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className="content">
      <a href="/" className="author">
        Sam
      </a>
      <div className="metadata">
        <span className="date">Today at 6:00 PM</span>
      </div>

      <div className="text">Nice blog post!</div>
    </div>
  </div>
    );
}

export default CommnetDetail