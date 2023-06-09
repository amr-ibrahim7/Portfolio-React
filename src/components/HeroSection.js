import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import SocialDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__ScrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__ScrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__ScrollDown {
    width: 50px;
    P {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      text-transform: uppercase;
      letter-spacing: 0.7rem;
    }
    img {
      max-width: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__ScrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          margin-bottom: 2rem;
          letter-spacing: 5px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      bottom: -15%;
      left: 0;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__ScrollDown {
      right: 0;
      width: 20px;
      gap: 1.2rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

const HeroSection = () => (
  <HeroStyles>
    <div className="hero">
      <div className="container">
        <h1 className="hero_heading">
          <span>Hello, This is</span>
          <span className="hero__name">Amr Ibrahim</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am working as a freelance web designer and developer for 2 years.
            I love to design and make new web experiences for the people.
          </PText>
          <Button btnText="see my works" btnLink="/project" />
        </div>
        <div className="hero__social">
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={SocialMediaArrow} alt="icon" />
          </div>
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362"
                  target="_blank"
                  rel="noreferrer"
                >
                  FB
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362"
                  target="_blank"
                  rel="noreferrer"
                >
                  TW
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362"
                  target="_blank"
                  rel="noreferrer"
                >
                  IG
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362"
                  target="_blank"
                  rel="noreferrer"
                >
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__ScrollDown">
          <p>Scroll</p>
          <img src={SocialDownArrow} alt="" />
        </div>
      </div>
    </div>
  </HeroStyles>
);

export default HeroSection;
