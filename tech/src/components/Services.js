import React from 'react';
import styled from 'styled-components';
import servicesBackground from '../assests/services-background.jpg';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background: url(${servicesBackground}) no-repeat center center/cover;
  text-align: center;
  color: #fff;
`;

const ServicesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ServiceItem = styled.div`
  width: 300px;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesList>
        <ServiceItem>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>Building responsive and high-quality websites.</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Cloud Computing</ServiceTitle>
          <ServiceDescription>Offering scalable cloud solutions for your business needs.</ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>AI Solutions</ServiceTitle>
          <ServiceDescription>Implementing AI technologies to enhance your operations.</ServiceDescription>
        </ServiceItem>
      </ServicesList>
    </ServicesContainer>
  );
};

export default Services;
