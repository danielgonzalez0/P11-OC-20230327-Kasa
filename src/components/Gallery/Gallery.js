import React, { useCallback, useEffect, useState } from 'react';

const Gallery = ({ gallery }) => {
  const [count, setCount] = useState(0);
  const [galleryArray, setGalleryArray] = useState([]);

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

  const handleArraowNavigation = useCallback(
    (e) => {
      if (e.code === 'ArrowLeft') {
        handleCountRemove();
      } else if (e.code === 'ArrowRight') {
        handleCountAdd();
      }
    },
    [handleCountRemove, handleCountAdd]
  );

  useEffect(() => {
    setGalleryArray(gallery);
  }, [gallery]);

  useEffect(() => {
    document.addEventListener('keydown', handleArraowNavigation);
    return function cleanup() {
      document.removeEventListener('keydown', handleArraowNavigation);
    };
  });

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
