// src/components/ResultSection.jsx

import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Replace these arrays with your actual image imports or paths
const neetJeeKeamImages = [
  'src/assests/one1.jpg',
  'src/assests/one2.jpg',
  'src/assests/one3.jpg',
  'src/assests/one4.jpg',
  'src/assests/one5.jpg',
  'src/assests/one6.jpg',
  'src/assests/one7.jpg',
  'src/assests/one8.jpg',
  'src/assests/one9.jpg',
  'src/assests/one10.jpg',
  // ...add all NEET/JEE/KEAM result images here
];

const plusOnePlusTwoImages = [
'src/assests/ww1.jpg',
'src/assests/ww2.jpg',
'src/assests/ww3.jpg',
'src/assests/ww4.jpg',
'src/assests/ww5.jpg',
'src/assests/ww6.jpg',
'src/assests/ww7.jpg',
'src/assests/ww8.jpg',
'src/assests/ww9.jpg',
'src/assests/ww10.jpg',
'src/assests/ww11.jpg',
'src/assests/ww12.jpg',
'src/assests/ww13.jpg',
'src/assests/ww14.jpg',
'src/assests/ww15.jpg',
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
