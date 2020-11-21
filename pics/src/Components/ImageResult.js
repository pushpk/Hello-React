import React from "react";
import ImageCard from "./ImageCard";

class ImageResult extends React.Component {
  render(props) {
    return (
        <div>
        <h4>Found: {this.props.imgData.length} images</h4>
      <div className='ui link cards'>
        {this.props.imgData.map((img) => (
          <ImageCard
            imgSrc={img.urls.regular}
            imgName={img.alt_description}
            likes={img.likes}
          />
        ))}
      </div>
      </div>
    );
  }
}

export default ImageResult;
