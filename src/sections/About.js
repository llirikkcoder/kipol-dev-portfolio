import React from "react";

import { Container, Div} from "../styles/styles";

import AboutMe from "../components/AboutMe";
import Namespace from "../components/Namespace";
// import animations
import { useScroll } from "../util/useScroll";
import { motion } from "framer-motion";
import { slideAnim } from "../animation";
import { useLanguage } from '../context/LanguageContext';


const About = () => {
    const [ref, controls] = useScroll();
    const { t } = useLanguage();

    return(
    <Div>
        <Container
            className="pt-20 max-w-[1080px] min-h-[50vh] flex-col items-start"
            animate={controls}
            ref={ref}
            id="about"
            variants={slideAnim.up}
        >
            <motion.h2><span>01.</span> {t('about.title')}</motion.h2>
            <motion.div className="flex justify-between max-[850px]:block">
                <AboutMe/>
                <Namespace />
            </motion.div>
        </Container>
    </Div>
    )
}

export default About;