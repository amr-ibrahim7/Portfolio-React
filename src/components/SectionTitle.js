import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
`;
const SectionTitle = ({
  subheading = 'Need Subheading',
  heading = 'Need Heading',
}) => (
  <SectionTitleStyle className="section-title">
    <p>{subheading}</p>
    <h2>{heading}</h2>
  </SectionTitleStyle>
);

export default SectionTitle;
