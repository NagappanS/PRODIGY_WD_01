import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TestimonialsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const TestimonialItem = styled.div`
  width: 300px;
  padding: 2rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
      <TestimonialsList>
        <TestimonialItem>
          <TestimonialText>"TechNova transformed our business with their innovative solutions. Highly recommended!"</TestimonialText>
          <TestimonialAuthor>John Doe, CEO of XYZ Corp</TestimonialAuthor>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>"The team at TechNova is extremely knowledgeable and professional. They delivered beyond our expectations."</TestimonialText>
          <TestimonialAuthor>Jane Smith, CTO of ABC Inc</TestimonialAuthor>
        </TestimonialItem>
      </TestimonialsList>
    </TestimonialsContainer>
  );
};

export default Testimonials;
