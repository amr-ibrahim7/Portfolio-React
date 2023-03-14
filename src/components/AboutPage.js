import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../assets/images/about-page-img.png';
import Button from './Button';
import AboutInfoItem from './AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.3rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      border-radius: 12px;
      padding: 0.7rem;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.7rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function AboutPage() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span> Amr Ibrahim</span>
            </p>
            <h2 className="about__heading">A Freelance Web Develpoer</h2>
            <div className="about__info">
              <PText>
                I am from Egypt,A place of beauty and natureSince my childhood,
                i love art and design.I always try to design stuff with my
                unique point of view. I also love to create things that can be
                usefull to others. <br /> <br />I graduated from the Faculty Of
                Commerce English Section .After graduation,I found my passion
                for programming and I decided to learn to program and shift my
                career to this field.
                <br /> <br /> Coding is also an art for me. I love it and now I
                have the opportunity to design along with the coding. I find it
                really interesting and I enjoyed the process a lot,My vision is
                to make the world a better place. Now almost everything is
                becoming better than ever.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <br />
        <hr />
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="Collage"
              items={['Faculty Of Commerce English Section']}
            />
            <AboutInfoItem title="Varsity" items={['university of Mansoura']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['Html', 'CSS', 'JavaScript', 'React', 'NextJs', 'ViteJs']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'PhP']} />
            <AboutInfoItem title="Design" items={['Photoshop', 'Figma']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem title="2021-2023" items={['junior developer']} />
            <AboutInfoItem
              title="2023-"
              items={['Front Developer & Freelance']}
            />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
