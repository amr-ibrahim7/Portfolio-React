import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    padding: 5rem 0;
    border-radius: 12px;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBan() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in Mind</PText>
          <h3 className="contactBanner__heading">Let Me help You</h3>
          <Button btnLink="/contact" btnText="Contact Now" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
