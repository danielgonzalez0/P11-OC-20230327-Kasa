import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * React component given the structure HTML of the image carousel
 * @param {PropTypes} gallery
 * @returns {React.ReactElement} Gallery
 */
const Gallery = ({ gallery }) => {
  const [count, setCount] = useState(0);
  const [galleryArray, setGalleryArray] = useState([]);

  /**
   * logic of adding 1 to the useState count
   */
  const handleCountAdd = () => {
    if (galleryArray) {
      if (count < galleryArray.length - 1) setCount(count + 1);
      if (count === galleryArray.length - 1) setCount(0);
    }
  };

  /**
   * logic of remove 1 to the useState count
   */
  const handleCountRemove = () => {
    if (galleryArray) {
      if (count > 0) setCount(count - 1);
      if (count === 0) setCount(galleryArray.length - 1);
    }
  };

  /**
   * logic of the keyboard navigation for the image gallery
   */
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

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
