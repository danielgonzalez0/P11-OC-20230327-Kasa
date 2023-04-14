import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SideBarContext } from '../AppContext/AppContext';

/**
 * React component given the structure HTML of the image carousel
 * @param {PropTypes} gallery array of flat pictures path
 * @returns {React.ReactElement} Gallery
 */
const Gallery = ({ gallery }) => {
  const [count, setCount] = useState(0);
  const [galleryArray, setGalleryArray] = useState([]);
  const { sideBarIsVisible } = useContext(SideBarContext);

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
  const handleArrowNavigation = useCallback(
    (e) => {
      if (e.code === 'ArrowLeft' && sideBarIsVisible === false) {
        handleCountRemove();
      } else if (e.code === 'ArrowRight' && sideBarIsVisible === false) {
        handleCountAdd();
      }
    },
    [handleCountRemove, handleCountAdd]
  );

  useEffect(() => {
      setGalleryArray(gallery);
    document.addEventListener('keydown', handleArrowNavigation);
    return () => document.removeEventListener('keydown', handleArrowNavigation);
  }, [handleArrowNavigation]);

  return (
    <div className="gallery-container">
      {galleryArray && galleryArray.length > 1 && (
        <button
          className="btn-left"
          onClick={handleCountRemove}
          tabIndex={sideBarIsVisible === true ? '-1' : '0'}
          aria-hidden={!sideBarIsVisible ? false : true}
        >
          <span className="fa-solid fa-angle-left"></span>
        </button>
      )}
      {galleryArray && galleryArray.length > 1 && (
        <button
          className="btn-right"
          onClick={handleCountAdd}
          tabIndex={sideBarIsVisible === true ? '-1' : '0'}
          aria-hidden={!sideBarIsVisible ? false : true}
        >
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
