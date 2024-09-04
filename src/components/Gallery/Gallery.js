import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
const [images, setImages] = useState([
        'img1.png',
        'img1.png',
        'img1.png'
  ]);

  const handleAddImage = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setImages([...images, newImage]);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <div className="left-icons">
          <div className="question-icon">?</div>
          <div className="grid-icon">▦</div>
        </div>
        <h3 className="gallery-title">Gallery</h3>
        <div className="gallery-controls">
          <input
            type="file"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleAddImage}
          />
          <button
            className="add-image-button"
            onClick={() => document.getElementById('file-upload').click()}
          >
           <b> + ADD IMAGE</b>
          </button>
          <button className="prev-button">←</button>
          <button className="next-button">→</button>
        </div>
      </div>
      <div className="gallery-images">
        {images.map((src, index) => (
          <div key={index} className="gallery-image-wrapper">
            <img
              src={src}
              alt={`gallery-img-${index}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
