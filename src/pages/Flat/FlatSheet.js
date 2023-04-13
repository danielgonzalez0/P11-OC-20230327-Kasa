import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import NotFound from '../NotFound/NotFound';

/**
 * React component given the HTML structure of a flat location page
 * @returns {React.ReactElement} FlatSheet
 */
const FlatSheet_copy = () => {
  const [flatData, setFlatData] = useState({});
  const [isError, setIsError] = useState(false);
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (state !== null) {
      setFlatData(state.from);
    } else {
      setIsError(true);
    }
  }, [location]);

  return (
    <>
      {isError ? (
        <NotFound />
      ) : (
        <>
          {flatData && (
            <>
              <div className="wrapper" id="flat-page">
                <header>
                  <Logo />
                  <Navigation menuVisible={setSideBarVisible} />
                </header>
                <main aria-hidden={!sideBarVisible ? false : true}>
                  <Gallery
                    gallery={flatData.pictures}
                    tabIndex={sideBarVisible}
                  />
                  <div className="infos-container">
                    <div className="grid-container">
                      <h1>{flatData.title}</h1>
                      <p>{flatData.location}</p>
                      <div className="name-container">
                        {flatData.host && (
                          <>
                            <span>{flatData.host.name}</span>
                            <img
                              src={flatData.host.picture}
                              alt={flatData.host.name}
                            />
                          </>
                        )}
                      </div>

                      <ul className="tag-list">
                        {flatData.tags &&
                          flatData.tags.map((tag, index) => (
                            <li className="tag" key={index}>
                              {tag}
                            </li>
                          ))}
                      </ul>
                      <ul className="rating-list">
                        <li>
                          {flatData.rating >= 1 ? (
                            <span className="fa-solid fa-star rating"></span>
                          ) : (
                            <span className="fa-sharp fa-solid fa-star not-rating"></span>
                          )}
                          {flatData.rating >= 2 ? (
                            <span className="fa-sharp fa-solid fa-star rating"></span>
                          ) : (
                            <span className="fa-sharp fa-solid fa-star not-rating"></span>
                          )}
                          {flatData.rating >= 3 ? (
                            <span className="fa-sharp fa-solid fa-star rating"></span>
                          ) : (
                            <span className="fa-sharp fa-solid fa-star not-rating"></span>
                          )}
                          {flatData.rating >= 4 ? (
                            <span className="fa-sharp fa-solid fa-star rating"></span>
                          ) : (
                            <span className="fa-sharp fa-solid fa-star not-rating"></span>
                          )}
                          {flatData.rating >= 5 ? (
                            <span className="fa-sharp fa-solid fa-star rating"></span>
                          ) : (
                            <span className="fa-sharp fa-solid fa-star not-rating"></span>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown-container">
                    <Dropdown
                      title={'Description'}
                      desc={flatData.description}
                      tabIndex={sideBarVisible}
                    />
                    <Dropdown
                      title={'Équipements'}
                      desc={flatData.equipments}
                      tabIndex={sideBarVisible}
                    />
                  </div>
                </main>
              </div>
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default FlatSheet_copy;
