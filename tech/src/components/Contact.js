import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 300px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 300px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
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

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea rows="4" placeholder="Message"></TextArea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
