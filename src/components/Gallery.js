import React, { useEffect, useState } from 'react';

const Gallery = ({ gallery }) => {
  const [count, setCount] = useState(0);
  const [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    setGalleryArray(gallery);
  }, [gallery]);

  return (
    <div className="gallery-container">
      <button className="btn btn-left">
        <span className="fa-solid fa-angle-left"></span>
      </button>
      <button className="btn btn-right">
        <span className="fa-solid fa-angle-right"></span>
      </button>
      {galleryArray && (
        <img
          src={galleryArray[count]}
          alt={`image ${count + 1} sur ${galleryArray.length}`}
        />
      )}
    </div>
  );
};

export default Gallery;
