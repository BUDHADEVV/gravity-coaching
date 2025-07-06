import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPlay, FaTrophy, FaStar, FaGraduationCap } from 'react-icons/fa';
import styled from 'styled-components';
import { homeData } from '../data/homeData';

const HeroContainer = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #3b82f6 100%);
  overflow: hidden;
  padding-top: 140px;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => props.active ? 0.15 : 0};
  transition: opacity 1s ease-in-out;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 64, 175, 0.8);
  z-index: 2;
`;

const MainContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  color: white;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  
  .highlight {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #1e40af;
  border: none;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
  }
`;

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px);
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const StudentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 350px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StudentImage = styled.div`
  width: 120px;
  height: 120px;
  background: url('/assets/killadi.jpg') center/cover;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  border: 4px solid #fbbf24;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
`;

const StudentName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

const StudentTitle = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const AchievementBadges = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const Badge = styled.div`
  background: ${props => 
    props.color === 'red' ? '#fef2f2' :
    props.color === 'blue' ? '#eff6ff' : '#f0fdf4'
  };
  color: ${props => 
    props.color === 'red' ? '#dc2626' :
    props.color === 'blue' ? '#2563eb' : '#16a34a'
  };
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
`;

const GravityBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const BrandIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: rgba(251, 191, 36, 0.3);
  font-size: ${props => props.size || '2rem'};
`;

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample images - replace with your actual image imports
  const backgroundImages = [
    '/src/assets/final1.png',
    '/src/assets/gravity-2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <HeroContainer id="home">
      {/* Background Images */}
      <BackgroundImageContainer>
        {backgroundImages.map((image, index) => (
          <BackgroundImage
            key={index}
            src={image}
            active={index === currentImageIndex}
          />
        ))}
      </BackgroundImageContainer>

      <ContentOverlay />

      {/* Floating Elements */}
      <FloatingElements>
        <FloatingIcon
          size="3rem"
          style={{ top: '20%', left: '10%' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <FaGraduationCap />
        </FloatingIcon>
        <FloatingIcon
          size="2.5rem"
          style={{ top: '60%', right: '15%' }}
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <FaTrophy />
        </FloatingIcon>
        <FloatingIcon
          size="2rem"
          style={{ bottom: '30%', left: '20%' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <FaStar />
        </FloatingIcon>
      </FloatingElements>

      <MainContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroGrid>
            {/* Left Content */}
            <LeftContent>
              <HeroTitle variants={itemVariants}>
                {homeData.hero.title}<br />
                <span className="highlight">{homeData.hero.highlight}</span><br />
                {homeData.hero.subtitle}
              </HeroTitle>

              <HeroDescription variants={itemVariants}>
                {homeData.hero.description}
              </HeroDescription>

              <ButtonGroup variants={itemVariants}>
                <PrimaryButton
                  onClick={() => {
                    window.open('https://wa.me/918281169061?text=Hi%20Gravity%2C%20I%20am%20interested%20in%20the%20Crash%20Course%20for%20NEET%2FJEE.', '_blank');
                  }}
                >
                  <FaRocket />
                  {homeData.hero.ctaButtons[0].text}
                </PrimaryButton>

                
              </ButtonGroup>

              <StatsGrid variants={itemVariants}>
                {homeData.hero.stats.map((stat, index) => (
                  <StatCard key={index}>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                ))}
              </StatsGrid>
            </LeftContent>

            {/* Right Content - Student Showcase */}
            <RightContent>
              <StudentCard
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <StudentImage />
                <StudentName>{homeData.achievements.featured.name}</StudentName>
                <StudentTitle>{homeData.achievements.featured.achievement}</StudentTitle>
                
                <AchievementBadges>
                  {homeData.achievements.featured.ranks.map((rank, index) => (
                    <Badge key={index} color={rank.color}>
                      {rank.title}
                    </Badge>
                  ))}
                </AchievementBadges>

                <GravityBrand>
                  <BrandIcon>
                    <FaRocket style={{ color: 'white', fontSize: '16px' }} />
                  </BrandIcon>
                  <span style={{ fontWeight: 'bold', color: '#1e40af' }}>
                    Gravity
                  </span>
                </GravityBrand>
              </StudentCard>
            </RightContent>
          </HeroGrid>
        </motion.div>
      </MainContent>
    </HeroContainer>
  );
};

export default HeroSection;
