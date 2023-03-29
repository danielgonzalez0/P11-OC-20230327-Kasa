import React, { useEffect, useState } from 'react';

const Gallery = ({ gallery }) => {
  const [count, setCount] = useState(0);
  const [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    setGalleryArray(gallery);
  }, [gallery]);

  const handleCountAdd = () => {
    if (galleryArray) {
      if (count < galleryArray.length - 1) setCount(count + 1);
      if (count === galleryArray.length - 1) setCount(0);
    }
  };

  const handleCountRemove = () => {
    if (galleryArray) {
      if (count > 0) setCount(count - 1);
      if (count === 0) setCount(galleryArray.length - 1);
    }
  };

  return (
    <div className="gallery-container">
      {galleryArray && galleryArray.length > 1 && (
        <button className="btn-left" onClick={handleCountRemove}>
          <span className="fa-solid fa-angle-left"></span>
        </button>
      )}
      {galleryArray && galleryArray.length > 1 && (
        <button className="btn-right" onClick={handleCountAdd}>
          <span className="fa-solid fa-angle-right"></span>
        </button>
      )}
      {galleryArray && (
        <img
          src={galleryArray[count]}
          alt={`appartement ${count + 1} sur ${galleryArray.length}`}
        />
      )}
      {galleryArray && galleryArray.length > 1 && (
        <span className="counter">{count + 1 + '/' + galleryArray.length}</span>
      )}
    </div>
  );
};

export default Gallery;
