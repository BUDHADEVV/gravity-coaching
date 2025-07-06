import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserGraduate, 
  FaUsers, 
  FaLaptop, 
  FaBook, 
  FaCheck,
  FaTrophy,
  FaStar
} from 'react-icons/fa';
import styled from 'styled-components';
import { aboutData } from '../data/aboutData';

const AboutContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftContent = styled.div`
  
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
`;

const SectionSubtitle = styled.p`
  color: #1e40af;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 2rem;
`;

const MissionStatement = styled(motion.div)`
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #fbbf24;
    font-family: serif;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
`;

const RightContent = styled.div`
  position: relative;
`;

const ImagesContainer = styled.div`
  position: relative;
  height: 600px;
  
  @media (max-width: 1024px) {
    height: 400px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: absolute;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background: white;
  padding: 1rem;
`;

const Image1 = styled(ImageWrapper)`
  top: 0;
  right: 0;
  width: 280px;
  height: 200px;
  z-index: 2;
  
  @media (max-width: 1024px) {
    width: 240px;
    height: 180px;
  }
`;

const Image2 = styled(ImageWrapper)`
  bottom: 50px;
  left: 0;
  width: 320px;
  height: 240px;
  z-index: 1;
  
  @media (max-width: 1024px) {
    width: 280px;
    height: 200px;
    bottom: 20px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const FloatingStats = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  z-index: 3;
  
  @media (max-width: 1024px) {
    position: static;
    transform: none;
    margin-top: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  color: rgba(30, 64, 175, 0.1);
  font-size: ${props => props.size || '2rem'};
  z-index: 1;
`;

const AboutSection = () => {
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

  const iconComponents = {
    FaUserGraduate,
    FaUsers,
    FaLaptop,
    FaBook
  };

  return (
    <AboutContainer id="about">
      {/* Floating Background Elements */}
      <FloatingElement
        size="4rem"
        style={{ top: '10%', left: '5%' }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaTrophy />
      </FloatingElement>
      <FloatingElement
        size="3rem"
        style={{ bottom: '15%', right: '10%' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <FaStar />
      </FloatingElement>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutGrid>
            {/* Left Content */}
            <LeftContent>
              <SectionHeader>
                <motion.div variants={itemVariants}>
                  <SectionSubtitle>About Us</SectionSubtitle>
                  <SectionTitle>
                    We Are Expert Educators And Mentors
                  </SectionTitle>
                </motion.div>
              </SectionHeader>

              <Description variants={itemVariants}>
                {aboutData.section.description}
              </Description>

              <MissionStatement variants={itemVariants}>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                  Our Mission
                </h4>
                <p style={{ margin: 0, lineHeight: '1.6' }}>
                  {aboutData.section.mission}
                </p>
              </MissionStatement>

              <motion.div variants={itemVariants}>
                <FeaturesGrid>
                  {aboutData.features.map((feature, index) => {
                    const IconComponent = iconComponents[feature.icon];
                    return (
                      <FeatureItem
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FeatureIcon>
                          <IconComponent />
                        </FeatureIcon>
                        <FeatureContent>
                          <FeatureTitle>{feature.title}</FeatureTitle>
                          <FeatureDescription>{feature.description}</FeatureDescription>
                        </FeatureContent>
                      </FeatureItem>
                    );
                  })}
                </FeaturesGrid>
              </motion.div>
            </LeftContent>

            {/* Right Content - Two Images */}
            <RightContent>
              <ImagesContainer>
                <Image1
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledImage 
                    src="/assets/gravity 2.png" 
                    alt="Gravity Coaching Students"
                  />
                </Image1>

                <Image2
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                >
                  <StyledImage 
                    src="/assets/final1.png" 
                    alt="Gravity Faculty and Environment"
                  />
                </Image2>

                <FloatingStats
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {aboutData.stats.map((stat, index) => (
                    <StatItem key={index}>
                      <StatNumber color={stat.color}>
                        {stat.number}
                      </StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatItem>
                  ))}
                </FloatingStats>
              </ImagesContainer>
            </RightContent>
          </AboutGrid>
        </motion.div>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
