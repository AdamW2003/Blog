import React, { useState, useEffect } from 'react';

const DynamicImage = ({ imageName, style }) => {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    import(`../images/${imageName}`)
      .then((image) => setImagePath(image.default))
      .catch((error) => console.error(error));
  }, [imageName]);

  if (!imagePath) {
    return <div>Loading...</div>; // You can render a loading state while the image is being fetched
  }

  return <img src={imagePath} alt="Dynamic Image" style={style}/>;
};

export default DynamicImage;
