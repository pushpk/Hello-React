import React from "react";

class ImageCard extends React.Component {
  constructor(props)
  {
    super(props);
    this.imageRef = React.createRef();
  }

  render() {
    return (
     
        <div className='card'>
          <div className='image'>
            <img src={this.props.imgSrc} ref={this.imageRef} />
          </div>
          <div className='content'>
            <div className='header'>{this.props.imgName}</div>
            <div className='meta'>
              <span>Likes : {this.props.likes}</span>
            </div>
          </div>
        </div>
      
    );
  }
}

export default ImageCard;
