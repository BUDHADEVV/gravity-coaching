// src/components/ResultSection.jsx

import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Replace these arrays with your actual image imports or paths
const neetJeeKeamImages = [
  './assets/one1.jpg',
  './assets/one2.jpg',
  './assets/one3.jpg',
  './assets/one4.jpg',
  './assets/one5.jpg',
  './assets/one6.jpg',
  './assets/one7.jpg',
  './assets/one8.jpg',
  './assets/one9.jpg',
  './assets/one10.jpg',
  // ...add all NEET/JEE/KEAM result images here
];

const plusOnePlusTwoImages = [
'./assets/ww1.jpg',
'./assets/ww2.jpg',
'./assets/ww3.jpg',
'./assets/ww4.jpg',
'./assets/ww5.jpg',
'./assets/ww6.jpg',
'./assets/ww7.jpg',
'./assets/ww8.jpg',
'./assets/ww9.jpg',
'./assets/ww10.jpg',
'./assets/ww11.jpg',
'./assets/ww12.jpg',
'./assets/ww13.jpg',
'./assets/ww14.jpg',
'./assets/ww15.jpg',
  // ...add all 11/12 result images here
];

// Animation keyframes for infinite horizontal scrolling
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SectionContainer = styled.section`
  padding: 100px 0 60px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  letter-spacing: -1px;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 2.5rem;
`;

const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 40s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const ResultImage = styled.img`
  width: 180px;
  height: 220px;
  object-fit: cover;
  border-radius: 1rem;
  margin: 0 18px;
  box-shadow: 0 6px 20px rgba(30,64,175,0.10);
  background: #fff;
  border: 2px solid #e5e7eb;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 12px 32px rgba(30,64,175,0.15);
    border-color: #1e40af;
  }
`;

const RowLabel = styled.div`
  color: #1e40af;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2.5vw;
  letter-spacing: 0.04em;
`;

const ResultSection = () => {
  // Duplicate images for seamless infinite scroll
  const getSliderImages = (images) => [...images, ...images];

  return (
    <SectionContainer id="results">
      <SectionTitle>Our Results & Achievements</SectionTitle>

      <RowLabel>NEET / JEE / KEAM Toppers</RowLabel>
      <SliderWrapper>
        <SliderTrack>
          {getSliderImages(neetJeeKeamImages).map((img, idx) => (
            <ResultImage src={img} alt="NEET/JEE/KEAM Result" key={idx} draggable={false} />
          ))}
        </SliderTrack>
      </SliderWrapper>

      <RowLabel>Class 11 & 12 Achievers</RowLabel>
      <SliderWrapper>
        <SliderTrack style={{ animationDuration: '50s' }}>
          {getSliderImages(plusOnePlusTwoImages).map((img, idx) => (
            <ResultImage src={img} alt="Plus One/Two Result" key={idx} draggable={false} />
          ))}
        </SliderTrack>
      </SliderWrapper>
    </SectionContainer>
  );
};

export default ResultSection;
