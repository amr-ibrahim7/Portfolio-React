import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Amr Ibrahim</h1>
          <PText>
            A freelance web designer and developer from Egy, I always make
            websites that have unique designs and also has a good performance
            rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/project',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '20+1029696632',
                path: 'tel:20+1029696632',
              },
              {
                title: 'amribra10@gmail.com',
                path: 'amribra10@gmail.com',
              },
              {
                title: 'Cairo',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path:
                  'https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362',
              },
              {
                title: 'Twitter',
                path:
                  'https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362',
              },
              {
                title: 'Instagram',
                path:
                  'https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2023 - Amr Ibrahim | Designed By:
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100009034623362"
            >
              Web_Minds
            </a>
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
