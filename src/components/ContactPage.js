import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    position: relative;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    margin-top: 7rem;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    transform: translate(-50%, -50%);
    top: 30%;
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactPage() {
  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle subheading="get in touch" heading="Contact" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+201029696632" />
            <ContactInfoItem icon={<MdEmail />} text="amribra10@gmail.com" />
            <ContactInfoItem text="Egypt, Cairo" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}
