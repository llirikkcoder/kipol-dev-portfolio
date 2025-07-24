import React from "react";
import { Container, Div } from "../styles/styles";
import styled from "styled-components";
import { useScroll } from "../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../animation";
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const [ref, controls] = useScroll();
  const { t, language } = useLanguage();
  
  const servicesData = t('services.items');

  return (
    <Div>
      <StyledServices animate={controls} ref={ref} id="services" variants={slideAnim.up}>
        <motion.h2><span>02.</span> {t('services.title')}</motion.h2>
        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{['🎯', '🤖', '🎨', '💼'][index]}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeaturesList>
                {service.features.map((feature, idx) => (
                  <Feature key={idx}>• {feature}</Feature>
                ))}
              </FeaturesList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </StyledServices>
    </Div>
  );
};

const StyledServices = styled(Container)`
  padding-top: 5rem;
  max-width: 1200px;
  min-height: 50vh;
  flex-direction: column;
  align-items: flex-start;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--color-secondary);
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-header);
  font-family: var(--font-sans);
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
`;

export default Services;