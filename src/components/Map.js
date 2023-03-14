import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/Map4.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    background-color: var(--deep-dark);
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    /* cursor: pointer; */
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;
export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">More Details</h3>
          <PText>Egypt,Cairo</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/"
            target="_blank"
            rel="noreferrer"
          >
            Open In Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
