import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About TechNova</AboutTitle>
      <AboutText>
        TechNova is a leading tech startup focused on delivering innovative solutions to help businesses grow and succeed in the digital age. Our team of experts specializes in web development, cloud computing, and AI technologies.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
