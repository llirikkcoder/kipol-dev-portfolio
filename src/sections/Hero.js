import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Description, Hide } from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation";
import Wave from "../assets/img/Wave";
import { useLanguage } from '../context/LanguageContext';
import avatar from "../assets/images/avatar.jpg";


const HeroSection = () => {
    const { t } = useLanguage();
    return(
        <StyledHero variants={staggerAnim} initial="hidden" animate="show">
            <HeroContent>
                <Description>
                    <motion.div>
                        <Hide>
                            <motion.h2 variants={slideAnim.up}>Hi, my name is </motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={slideAnim.up}><span>Kirill Pavliashik</span></motion.h2>
                        </Hide>
                    </motion.div>
                    <WidthContainer>
                        <Hide>
                            <motion.p variants={slideAnim.up}> 
                            I build web-based solutions that prioritize functionality and user experience. I enjoy turning ideas into reality by creating practical and visually appealing web applications.</motion.p>
                        </Hide>     
                    </WidthContainer>
                    <ButtonContainer>
                        <Hide>
                            <a href="https://github.com/llirikkcoder" target="_blank" rel="noreferrer">
                                <motion.button variants={slideAnim.up}>Github</motion.button>
                            </a>        
                        </Hide>
                    </ButtonContainer>
                </Description>
                <AvatarContainer>
                    <Avatar 
                        src={avatar} 
                        alt="Kirill Pavliashik"
                        variants={slideAnim.up}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </AvatarContainer>
            </HeroContent>
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

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const AvatarContainer = styled.div`
  flex-shrink: 0;
  overflow: visible;
  padding: 20px;
`

const Avatar = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-secondary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background-color: var(--color-bg);
  display: block;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
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