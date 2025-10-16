import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

function AboutMe() {
  const { t } = useLanguage();

  return (
    <Description className="flex items-start justify-start flex-[3] flex-wrap mr-8 max-w-[90vw] [&_p_span]:font-[var(--font-sans)] [&_p_span]:text-[var(--color-header)] [&_.bold]:font-[var(--font-sans)] [&_.bold]:text-[var(--color-header)]">
      <motion.p><strong>{t('about.tagline')}</strong><br />
      <br/>
      {t('about.description')}</motion.p> <br />
      <p className='bold'>{t('about.keyDirections')}</p>
        <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-4">
          <Social>
            <Circle/>
            <li>{t('about.directions.ai')}</li>
          </Social>
          <Social>
            <Circle/>
            <li>{t('about.directions.web')}</li>
          </Social>
          <Social>
            <Circle/>
            <li>{t('about.directions.artScience')}</li>
          </Social>
          <Social>
            <Circle/>
            <li>{t('about.directions.salesFunnels')}</li>
          </Social>
        </div>
    </Description>
)}

export default AboutMe;