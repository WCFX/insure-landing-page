import React from 'react'

import LogoInsure from '../../assets/logo.svg';
import IntroFamily from '../../assets/image-intro-desktop.jpg';
import IntroPatternRight from '../../assets/bg-pattern-intro-right-desktop.svg';
import IntroPatternLeft from '../../assets/bg-pattern-intro-left-desktop.svg';
import ThunderCircle from '../../assets/icon-snappy-process.svg';
import DollarCircle from '../../assets/icon-affordable-prices.svg';
import PeopleCircle from '../../assets/icon-people-first.svg';

import { 
  Container,
  Header,
  Navbar,
  Section1,
  Section2,
  Section3,
  Footer,
  ContainerSocialMedia,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  InstagramIcon,
  InfoContainer
} from './styles';

const Home = () => {
  return(
    <Container>

      <Header>
        <img src={LogoInsure} alt="Imagem" />
        <Navbar>
          <ul>
            <li><a href="index.html">HOW WE WORK</a></li>
            <li><a href="index.html">BLOG</a></li>
            <li><a href="index.html">ACCOUNT</a></li>
            <button className="plans" ><a href="index.html">VIEW PLANS</a></button>
          </ul>
        </Navbar>
      </Header>

      <Section1>

        <h2>Humanizing your insurance.</h2>
        <p>Get your life insurance coverage easier and faster. We blend our expertise 
         and technology to help you find the plan that’s right for you. Ensure you 
         and your loved ones are protected.</p>
         <button className="plans" ><a href="index.html">VIEW PLANS</a></button>
        <img src={IntroFamily} alt="Imagem" />
        <img src={IntroPatternRight} alt="Imagem" />
        <img src={IntroPatternLeft} alt="Imagem" />

      </Section1>

      <Section2>

        <h2>We're different</h2>
        <div className="different-container">
          <img src={ThunderCircle} alt="Imagem" />
          <h3>Snappy Process</h3>
          <p>Our application process can be completed in minutes, not hours.
             Don’t get stuck filling in tedious forms.</p>
        </div>
        <div className="different-container">
          <img src={DollarCircle} alt="Imagem" />
          <p>We don’t want you worrying about high monthly costs. 
            Our prices may be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="different-container">
          <img src={PeopleCircle} alt="Imagem" />
          <p>Our plans aren’t full of conditions and clauses to prevent payouts.
             We make sure you’re covered when you need it.</p>
        </div>

      </Section2>

      <Section3>
        <h2>Find out more About how we work </h2>
        <button className="plans" ><a href="index.html">HOW WE WORK</a></button>
      </Section3>

      <Footer>

        <ContainerSocialMedia>
          <img src={LogoInsure} alt="Imagem" />
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </ContainerSocialMedia>

        <InfoContainer>

          <div>
            <a className="title-info" href="index.html">OUR COMPANY</a>
            <a href="index.html">HOW WE WORK</a>
            <a href="index.html">WHY INSURE?</a>
            <a href="index.html">VIEW PLANS</a>
            <a href="index.html">REVIEWS</a>
          </div>
          
          <div>
            <a className="title-info" href="index.html">HELP ME</a>
            <a href="index.html">FAQ</a>
            <a href="index.html">TERMS OF USE</a>
            <a href="index.html">PRIVACY POLICY</a>
            <a href="index.html">COOKIES</a>
          </div>
          
          <div>
            <a className="title-info" href="index.html">CONTACT</a>
            <a href="index.html">SALES</a>
            <a href="index.html">SUPPORT</a>
            <a href="index.html">LIVE CHAT</a>
          </div>
          
          <div>
            <a className="title-info" href="index.html">OTHERS</a>
            <a href="index.html">CAREERS</a>
            <a href="index.html">PRESS</a>
            <a href="index.html">LICENSES</a>
          </div>
          
        </InfoContainer>
      </Footer>


    </Container>
  )
};


export default Home;