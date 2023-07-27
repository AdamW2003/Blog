import React from 'react';
import image from '../images/indianajones.jpg'

const DynamicImage = ({ imageName }) => {
    const imagePath = require(`../images/${imageName}`);
    console.log(imagePath)
    return (
      <img src={imagePath.default} alt="Dynamic Image" />
    );
  };
  
export default DynamicImage;