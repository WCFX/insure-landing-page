import styled from 'styled-components';

import { AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

export const Container = styled.div`
  height: 100vh;
  
  background: var(--bg);

`;

export const Header = styled.header`
  z-index: 1;
  background-color: var(--bg);
  position: absolute;
  right: 0;
  left: 0;

`;
export const Navbar = styled.nav`
  max-width: 100%;
  width: 1440px;
  height: 80px;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin: 0 auto;

  img {
    height: 20px;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li {
    margin-right: 10px;
    padding: 15px;
  }
  a {
    color: var(--grey);
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
  }
  .plans {
    margin-left: 30px;
  }
`;
export const Section1 = styled.section`

  background-color: var(--bg-blue);
  height: 600px;
  padding-top: 150px;


  .container-intro-1 {
    max-width: 100%;
    width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .info-intro {
      display: flex;
      flex-direction: column;
      width: 700px;

      ::before {
        content: '';
        display: block;
        width: 250px;
        height: 1px;
        background-color: var(--bg);
        margin-bottom: 50px;
      }
      h2 {
        font-size: 6rem;
        color: var(--bg);
        font-family: 'Playfair Display', serif;
        line-height: 5.55rem;
      }
      p {
        margin-top: 20px;
        color: var(--bg);
        letter-spacing: 2px;
        font-family: 'Karla', sans-serif; 
      }
    }

    .Family {
    }

    p {
      font-size: 1rem;
    }
  }
  
  .container-intro-2 {



    .PatternRight {
    position: absolute;
    top: 0;
    right: 0;
    }
    .PatternLeft {
    position: absolute;
    display: none;
    }

  }
  


  
`;
export const Section2 = styled.section``;

export const Section3 = styled.section``;
export const Footer = styled.div``;
export const ContainerSocialMedia = styled.div``;
export const FacebookIcon = styled(AiFillFacebook)``;
export const TwitterIcon = styled(AiFillTwitterSquare)``;
export const PinterestIcon = styled(FaPinterest)``;
export const InstagramIcon = styled(SiInstagram)``;
export const InfoContainer = styled.div``;