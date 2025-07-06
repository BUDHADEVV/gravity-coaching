import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaRocket,
  FaRedoAlt,
  FaClock,
  FaUsers,
  FaBook,
  FaCheck
} from 'react-icons/fa';
import styled from 'styled-components';

const CoursesContainer = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CourseCard = styled(motion.div)`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  height: fit-content;
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-8px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || '#1e40af'};
  }
`;

const CourseIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color || '#1e40af'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const CourseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

const CourseSubtitle = styled.p`
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const EnrollButton = styled.a`
  display: block;
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  
  &:hover {
    background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(30, 64, 175, 0.3);
    color: white;
  }
`;

const CourseSection = () => {
  const courses = [
    {
      id: "class-tuition",
      title: "Classes 10, 11, 12 Tuition",
      subtitle: "Complete Foundation & Board Exam Preparation for CBSE/State Syllabus",
      icon: FaGraduationCap,
      color: "#16a34a",
      duration: "Full Academic Year",
      batchSize: "20-25 students",
      schedule: "6 days/week",
      features: [
        "Complete syllabus coverage for Classes 10, 11 & 12",
        "Board exam preparation with mock tests",
        "Strong foundation for entrance exams",
        "Regular assessments and progress tracking",
        "Doubt clearing sessions",
        "Study materials and notes provided"
      ],
      whatsappMessage: "Hi! I'm interested in Classes 10, 11, 12 Tuition at Gravity Coaching Centre. Please provide more details about admission process, fees, and batch timings."
    },
    {
      id: "crash-course",
      title: "Crash Course",
      subtitle: "Intensive Fast-Track Preparation for NEET, JEE & KEAM Entrance Exams",
      icon: FaRocket,
      color: "#dc2626",
      duration: "3-6 Months",
      batchSize: "15-20 students",
      schedule: "6 days/week",
      features: [
        "Rapid syllabus completion for NEET, JEE & KEAM",
        "High-yield topics and important concepts",
        "Daily practice tests and mock exams",
        "Time management and exam strategies",
        "Previous year question paper analysis",
        "Intensive revision and doubt solving"
      ],
      whatsappMessage: "Hi! I'm interested in the Crash Course for NEET/JEE/KEAM at Gravity Coaching Centre. Please share details about course duration, fees, and upcoming batch dates."
    },
    {
      id: "repeaters-batch",
      title: "Repeaters Batch",
      subtitle: "Specialized Intensive Coaching for NEET, JEE & KEAM Repeater Students",
      icon: FaRedoAlt,
      color: "#7c3aed",
      duration: "10-11 Months",
      batchSize: "12-15 students",
      schedule: "6 days/week",
      features: [
        "Exclusive batch for 12th pass students",
        "Intensive preparation for NEET, JEE & KEAM",
        "Personal mentoring and weakness analysis",
        "Target-oriented study plans",
        "Regular counseling and motivation sessions",
        "Small batch for individual attention"
      ],
      whatsappMessage: "Hi! I'm interested in the Repeaters Batch for NEET/JEE/KEAM at Gravity Coaching Centre. I'm a 12th pass student looking for intensive coaching. Please provide admission details and fee structure."
    }
  ];

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

  const generateWhatsAppLink = (message) => {
    const phoneNumber = "918281169061"; // Gravity's WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <CoursesContainer id="courses">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <SectionHeader>
            <motion.div variants={itemVariants}>
              <SectionTitle>Our Courses</SectionTitle>
              <SectionDescription>
                Choose the perfect program for your academic journey and entrance exam success
              </SectionDescription>
            </motion.div>
          </SectionHeader>

          {/* Courses Grid */}
          <CoursesGrid>
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <CourseCard
                  key={course.id}
                  color={course.color}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseIcon color={course.color}>
                    <IconComponent />
                  </CourseIcon>
                  
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseSubtitle>{course.subtitle}</CourseSubtitle>

                  <CourseInfo>
                    <InfoItem>
                      <FaClock />
                      Duration: {course.duration}
                    </InfoItem>
                    <InfoItem>
                      <FaUsers />
                      Batch Size: {course.batchSize}
                    </InfoItem>
                    <InfoItem>
                      <FaBook />
                      Classes: {course.schedule}
                    </InfoItem>
                  </CourseInfo>

                  <FeaturesList>
                    {course.features.map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <FaCheck style={{ color: course.color, fontSize: '0.75rem' }} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeaturesList>

                  <EnrollButton
                    href={generateWhatsAppLink(course.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now
                  </EnrollButton>
                </CourseCard>
              );
            })}
          </CoursesGrid>
        </motion.div>
      </Container>
    </CoursesContainer>
  );
};

export default CourseSection;
