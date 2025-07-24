import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Description, Hide } from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation";
import Wave from "../assets/img/Wave";
import { useLanguage } from '../context/LanguageContext';


const HeroSection = () => {
    const { t } = useLanguage();
    return(
        <StyledHero variants={staggerAnim} initial="hidden" animate="show">
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={slideAnim.up}>{t('hero.greeting')} </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={slideAnim.up}><span>{t('hero.name')}</span></motion.h2>
                    </Hide>
                </motion.div>
                <WidthContainer>
                    <Hide>
                        <motion.p variants={slideAnim.up}> 
                        {t('hero.description')}</motion.p>
                    </Hide>     
                </WidthContainer>
                <ButtonContainer>
                    <Hide>
                        <a href="https://github.com/llirikkcoder" target="_blank" rel="noreferrer">
                            <motion.button variants={slideAnim.up}>{t('hero.github')}</motion.button>
                        </a>        
                    </Hide>
                </ButtonContainer>
            </Description>
            <Wave />
        </StyledHero>
    )
}

const StyledHero = styled(Container)`
min-height: 100vh;
p{
    padding: 0 0 1.5rem;
}
  h2{
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 0rem;
    span {
        font-family: 'Poppins', sans-serif;
        font-size: 4rem;
        font-weight: 800;
        @media (max-width: 850px) {
            font-size: 3.5rem;
        }
    }
  }
`

const ButtonContainer = styled.div`
display: flex;
`
const WidthContainer = styled.div`
  @media (min-width: 850px) {
    max-width: 600px;
  }
`

export default HeroSection;