import React from "react";
import { Container, Div } from "../styles/styles";
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
      <Container
        className="pt-20 max-w-[1200px] min-h-[50vh] flex-col items-start"
        animate={controls}
        ref={ref}
        id="services"
        variants={slideAnim.up}
      >
        <motion.h2><span>02.</span> {t('services.title')}</motion.h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full mt-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-lg p-8 transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--color-secondary)] hover:-translate-y-1"
            >
              <div className="text-[2.5rem] mb-4">{['🎯', '🤖', '🎨', '💼'][index]}</div>
              <h3 className="text-[1.3rem] mb-4 text-[var(--color-header)] font-[var(--font-sans)]">
                {service.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.6] mb-6 text-[var(--color-text)]">
                {service.description}
              </p>
              <ul className="list-none p-0">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-[0.85rem] mb-2 text-[var(--color-secondary)]">
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Div>
  );
};

export default Services;