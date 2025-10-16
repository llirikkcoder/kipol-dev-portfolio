import React from 'react'
import {motion} from "framer-motion"
import { Container, Div, Hide} from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation"
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
      <Container
        className="min-h-[90vh] flex-col items-start justify-center max-[650px]:p-8 max-[650px]:[&_h3]:text-[1.6rem]"
        animate={controls}
        ref={ref}
        variants={staggerAnim}
        id="contact"
      >
        <div>
          <Hide>
            <motion.h2 variants={slideAnim.up}><span>05.</span> {t('contact.title')}</motion.h2>
          </Hide>
        </div>
        <div className="my-8 [&_h3]:text-[2rem] [&_h3]:mb-4 [&_h3]:text-[var(--primary)] [&_p]:mb-8 [&_p]:max-w-[35rem] [&_p]:leading-[1.6]">
          <Hide>
            <motion.h3 variants={slideAnim.up}>{t('contact.text')}</motion.h3>
          </Hide>
          <Hide>
            <motion.p variants={slideAnim.up}>{t('contact.description')}</motion.p>
          </Hide>
        </div>
        <div className="flex flex-col items-start w-full max-w-[35rem] [&_button]:mt-4">
          <Hide>
            <motion.div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="bg-[var(--color-bg)] h-12 w-12 flex items-center justify-center rounded-full"
                variants={slideAnim.up}
              >
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </motion.div>
              <motion.p variants={slideAnim.up}>llirikk@gmail.com</motion.p>
            </motion.div>
          </Hide>
          <Hide>
            <motion.div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="bg-[var(--color-bg)] h-12 w-12 flex items-center justify-center rounded-full"
                variants={slideAnim.up}
              >
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </motion.div>
              <motion.p variants={slideAnim.up}>+995 591006048</motion.p>
            </motion.div>
          </Hide>
          <Hide>
            <motion.a href="mailto:llirikk@gmail.com" variants={slideAnim.up}>
              <motion.button variants={slideAnim.up}>{t('contact.button')}</motion.button>
            </motion.a>
          </Hide>
        </div>
      </Container>
    </Div>
  )
}

export default Contact;