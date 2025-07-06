import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import { navigationData } from '../data/Navigations';

// Styled Components
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(30, 64, 175, 0.98)' : 'rgba(30, 64, 175, 0.95)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const TopBar = styled.div`
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  color: white;
  font-size: 14px;
  padding: 8px 0;
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  transition: color 0.3s ease;
  &:hover {
    color: #fbbf24;
  }
`;

const MainNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImageSmall = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  object-fit: contain;
  background: white;
  box-shadow: 0 0 10px rgba(30,64,175,0.08);
`;

const LogoImageMain = styled.img`
  width: 120px;
  height: 38px;
  object-fit: contain;
  background: transparent;
`;

const BrandTagline = styled.p`
  color: #d1d5db;
  font-size: 0.75rem;
  font-style: italic;
  margin: 0 0 0 0.5rem;
  @media (max-width: 640px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.active ? '#fbbf24' : 'white'};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  &:hover {
    color: #fbbf24;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }
`;

const CTASection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const EnrollButton = styled.a`
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #1e40af;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
  text-decoration: none;
  display: inline-block;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(30, 64, 175, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 215, 0, 0.2);
  @media (min-width: 1025px) {
    display: none !important;
  }
`;

const MobileMenuContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavLink = styled.a`
  color: ${props => props.active ? '#fbbf24' : 'white'};
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fbbf24;
  }
`;

const WhatsAppFloat = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, sectionName) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <NavbarContainer scrolled={isScrolled}>
        {/* Top Bar */}
        <TopBar>
          <TopBarContent>
            <ContactLinks>
              <ContactLink href={`tel:${navigationData.contactInfo.phone}`}>
                <FaPhone size={12} />
                {navigationData.contactInfo.phone}
              </ContactLink>
              <ContactLink href="mailto:maneeshanil@gmail.com">
                <FaPhone size={12} />
                maneeshanil89@gmail.com
              </ContactLink>
            </ContactLinks>
            <ContactLinks>
              <ContactLink href="#admission">
                Parayamkulam junction
              </ContactLink>
              <ContactLink href="#careers">
                Charumoodu
              </ContactLink>
            </ContactLinks>
          </TopBarContent>
        </TopBar>

        {/* Main Navigation */}
        <MainNav>
          <LogoSection>
            {/* Small logo icon */}
            <LogoImageSmall src="/assets/logograv.png" alt="Gravity Symbol" />
            {/* Main logo */}
            <LogoImageMain src="/assets/logogravity.png" alt="Gravity Coaching Logo" />
            <BrandTagline>{navigationData.brand.tagline}</BrandTagline>
          </LogoSection>

          <DesktopMenu>
            {navigationData.menuItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                active={activeSection === item.name.toLowerCase()}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.name.toLowerCase());
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </DesktopMenu>

          <CTASection>
            <EnrollButton
              href={`https://wa.me/91${navigationData.contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              CONTACT
            </EnrollButton>
            <MobileMenuButton 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuButton>
          </CTASection>
        </MainNav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileMenuContent>
                {navigationData.menuItems.map((item) => (
                  <MobileNavLink
                    key={item.name}
                    href={item.href}
                    active={activeSection === item.name.toLowerCase()}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name.toLowerCase());
                    }}
                  >
                    {item.name}
                  </MobileNavLink>
                ))}
              </MobileMenuContent>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarContainer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat 
        href={`https://wa.me/91${navigationData.contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </WhatsAppFloat>
    </>
  );
};

export default Navbar;
