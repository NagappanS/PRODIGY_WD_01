import React from 'react';
import styled from 'styled-components';
import heroImage from '../assests/hero-image.jpg';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${heroImage}) no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const HeroHeadline = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: cyan;
`;

const HeroSubheadline = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: cyan;
`;

const HeroButton = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1rem;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroHeadline>Innovative Tech Solutions</HeroHeadline>
      <HeroSubheadline>Empowering your business with cutting-edge technology.</HeroSubheadline>
      <HeroButton>Get Started</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
