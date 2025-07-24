import React from 'react'
import {motion} from "framer-motion"
import { Container, Div, Hide} from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useScroll } from '../util/useScroll';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { useLanguage } from '../context/LanguageContext';


const Contact = () => { 
  const [ref, controls] = useScroll();
  const { t } = useLanguage();

  return (
    <Div>
      <ContactStyle animate={controls} ref={ref} variants={staggerAnim} id="contact">
        <div>
          <Hide>
            <motion.h2 variants={slideAnim.up}><span>05.</span> {t('contact.title')}</motion.h2>
          </Hide>
        </div>
        <ContactContent>
          <Hide>
            <motion.h3 variants={slideAnim.up}>{t('contact.text')}</motion.h3>
          </Hide>
          <Hide>
            <motion.p variants={slideAnim.up}>{t('contact.description')}</motion.p>
          </Hide>
        </ContactContent>
        <ContactInfo>
          <Hide>
            <Info>
            <IconContainer variants={slideAnim.up}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </IconContainer>
            <motion.p variants={slideAnim.up}>llirikk@gmail.com</motion.p>
            </Info>
          </Hide>
          <Hide>
            <Info>
              <IconContainer variants={slideAnim.up}>
                  <FontAwesomeIcon icon={faPhone  }></FontAwesomeIcon>
              </IconContainer>
              <motion.p variants={slideAnim.up}>+995 591006048</motion.p>
            </Info>
          </Hide>
          <Hide>
            <motion.a href="mailto:llirikk@gmail.com" variants={slideAnim.up}>
              <motion.button variants={slideAnim.up}>{t('contact.button')}</motion.button>
            </motion.a>
          </Hide>
        </ContactInfo>
        </ContactStyle>
    </Div>
  )
}

const ContactStyle = styled(Container)`
min-height: 90vh;
flex-direction: column;
align-items: flex-start;
justify-content: center;
@media (max-width: 650px){
  padding: 2rem;
  h3{
    font-size: 1.6rem;
  }
}
`
const ContactContent = styled.div`
margin: 2rem 0;
h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary);
}
p {
  margin-bottom: 2rem;
  max-width: 35rem;
  line-height: 1.6;
}
`

const ContactInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
max-width: 35rem;
button{
  margin-top: 1rem;
}
`
const IconContainer = styled(motion.div)`
background: var(--color-bg);
height: 3rem;
width: 3rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`

const Info = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
margin-bottom: 2rem;
`



export default Contact;