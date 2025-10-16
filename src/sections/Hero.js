import React from "react";
import { motion } from "framer-motion";
import { Container, Description, Hide } from "../styles/styles";
import { slideAnim, staggerAnim } from "../animation";
import Wave from "../assets/img/Wave";
import { useLanguage } from '../context/LanguageContext';
import avatar from "../assets/images/avatar.jpg";


const HeroSection = () => {
    const { t } = useLanguage();
    return(
        <Container
            className="min-h-screen [&_p]:pb-6 [&_h2]:text-xl [&_h2]:font-light [&_h2]:mb-0 [&_h2_span]:font-['Poppins',sans-serif] [&_h2_span]:text-6xl [&_h2_span]:font-extrabold max-[850px]:[&_h2_span]:text-[3.5rem]"
            variants={staggerAnim}
            initial="hidden"
            animate="show"
        >
            <div className="flex items-center justify-between w-full gap-16 max-[1024px]:flex-col max-[1024px]:gap-8">
                <Description>
                    <motion.div>
                        <Hide>
                            <motion.h2 variants={slideAnim.up}>{t('hero.greeting')} </motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={slideAnim.up}><span>{t('hero.name')}</span></motion.h2>
                        </Hide>
                    </motion.div>
                    <div className="min-[850px]:max-w-[600px]">
                        <Hide>
                            <motion.p variants={slideAnim.up}>
                            {t('hero.description')}</motion.p>
                        </Hide>
                    </div>
                    <div className="flex">
                        <Hide>
                            <a href="https://github.com/llirikkcoder" target="_blank" rel="noreferrer">
                                <motion.button variants={slideAnim.up}>Github</motion.button>
                            </a>
                        </Hide>
                    </div>
                </Description>
                <div className="flex-shrink-0 overflow-visible p-5">
                    <motion.img
                        src={avatar}
                        alt="Kirill Pavliashik"
                        className="w-[300px] h-[300px] rounded-full object-cover border-4 border-[var(--color-secondary)] shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-[var(--color-bg)] block max-[768px]:w-[200px] max-[768px]:h-[200px] max-[480px]:w-[150px] max-[480px]:h-[150px]"
                        variants={slideAnim.up}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </div>
            <Wave />
        </Container>
    )
}

export default HeroSection;