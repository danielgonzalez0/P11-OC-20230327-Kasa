import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Logo from '../../components/Header/Logo';
import Navigation from '../../components/Header/Navigation';
import NotFound from '../NotFound/NotFound';
import logement from '../../data/logements.json';
import { SideBarContext } from '../../components/AppContext/AppContext';

/**
 * React component given the HTML structure of a flat location page
 * @returns {React.ReactElement} FlatSheet
 */
const FlatSheet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [flatData, setFlatData] = useState({});
  const { sideBarIsVisible } = useContext(SideBarContext);

  const { id } = useParams();

  useEffect(() => {
    const data = logement.filter((flat) => flat.id === id);
    if (data.length > 0) {
      setFlatData(data[0]);
      setIsLoading(false);
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p className="loading">chargement en cours...</p>;
  }

  if (isError) {
    return <NotFound />;
  }

  if (!isLoading && !isError) {
    return (
      <>
        {flatData && (
          <>
            <div className="wrapper" id="flat-page">
              <header>
                <Logo />
                <Navigation />
              </header>
              <main aria-hidden={!sideBarIsVisible ? false : true}>
                <Gallery
                  gallery={flatData.pictures}
                  tabIndex={sideBarIsVisible}
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
                    tabIndex={sideBarIsVisible}
                  />
                  <Dropdown
                    title={'Équipements'}
                    desc={flatData.equipments}
                    tabIndex={sideBarIsVisible}
                  />
                </div>
              </main>
            </div>
            <Footer />
          </>
        )}
      </>
    );
  }
};

export default FlatSheet;
