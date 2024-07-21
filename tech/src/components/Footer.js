import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="#">Facebook</SocialLink>
        <SocialLink href="#">Twitter</SocialLink>
        <SocialLink href="#">LinkedIn</SocialLink>
      </SocialLinks>
      <p>&copy; 2024 TechNova. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
