// src/components/ContactSection.jsx

import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContact = styled.footer`
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  color: #f8fafc;
  padding: 48px 0 32px 0;
  margin-top: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

const LogoBox = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandTitle = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: #f8fafc;
`;

const Tagline = styled.div`
  font-size: 1rem;
  color: #fbbf24;
  font-style: italic;
  margin-left: 0.25rem;
`;

const DetailsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.075rem;
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: #25d366;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  gap: 0.75rem;
  box-shadow: 0 2px 10px rgba(37, 211, 102, 0.2);
  transition: background 0.2s;
  &:hover {
    background: #1ebe5d;
  }
`;

const Copyright = styled.div`
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #cbd5e1;
  text-align: center;
`;

const ContactSection = () => (
  <FooterContact id="contact">
    <Container>
      <BrandRow>
        <LogoBox>
          <FaWhatsapp style={{ color: '#1e40af', fontSize: '1.5rem' }} />
        </LogoBox>
        <BrandTitle>Gravity</BrandTitle>
        <Tagline>An Academy Where Minds Accelerate</Tagline>
      </BrandRow>

      <DetailsGrid>
        <ContactItem>
          <FaMapMarkerAlt style={{ color: '#fbbf24' }} />
          Near Parayamkulam Junction, Charumoodu, Alappuzha
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ color: '#fbbf24' }} />
          <span>
            <a href="tel:8281169061" style={{ color: '#f8fafc', textDecoration: 'none' }}>8281169061</a>,{' '}
            <a href="tel:8590538982" style={{ color: '#f8fafc', textDecoration: 'none' }}>8590538982</a>
          </span>
        </ContactItem>
        <ContactItem>
          <FaEnvelope style={{ color: '#fbbf24' }} />
          <a href="mailto:info@gravitycoaching.in" style={{ color: '#f8fafc', textDecoration: 'none' }}>
           maneeshanil89@gmail.com
          </a>
        </ContactItem>
        <WhatsAppButton
          href="https://wa.me/918281169061"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={22} />
          Chat on WhatsApp
        </WhatsAppButton>
      </DetailsGrid>

      <Copyright>
        &copy; {new Date().getFullYear()} Gravity Entrance Coaching Centre. All Rights Reserved.
      </Copyright>
    </Container>
  </FooterContact>
);

export default ContactSection;
