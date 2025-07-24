import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

function AboutMe() {
  const { t } = useLanguage();

  return (
    <StyledAboutMe>
      <motion.p><strong>{t('about.tagline')}</strong><br /> 
      <br/>
      {t('about.description')}</motion.p> <br />
      <p className='bold'>{t('about.keyDirections')}</p>
        <Technologies>
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
        </Technologies>
    </StyledAboutMe>  
)}

const StyledAboutMe = styled(Description)`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex: 3;
flex-wrap: wrap;
margin-right: 2rem;
max-width: 90vw;
p span, .bold{
  font-family: var(--font-sans);
  color: var(--color-header);
}
`

const Technologies = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`


export default AboutMe;