import React from "react";
import "./style.css";


function ImageCard(props) {
  return (
    <div class="image"  onClick={() => props.clickImage(props.id)}>
      
        <img src={props.href} />
      
     
     
    </div>
  );
}

export default ImageCard;
