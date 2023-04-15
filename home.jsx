import React from 'react';

const images = [
  { src: 'image1.jpg', title: 'Image 1', description: 'Description for Image 1' },
  { src: 'image2.jpg', title: 'Image 2', description: 'Description for Image 2' },
  { src: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
];

const home = () => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.src}>
          <img src={image.src} alt={image.title} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default home;