import React from 'react'
import styled from 'styled-components';
import { Container, Div } from "../styles/styles";
import Techstack from "../components/Techstack";
import { motion } from 'framer-motion';

import { faCode, faDatabase, faRuler } from '@fortawesome/fontawesome-free-solid'
import { faLaptopCode, faRobot, faChartLine, faPalette, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { slideAnim } from "../animation";
import { useScroll } from "../util/useScroll";
import { useLanguage } from '../context/LanguageContext';


const Technologies = () => {
  const [ref, controls] = useScroll();
  const { t } = useLanguage();

  const backend = {
    title: t('technologies.categories.backend'),
    technologies: [
      "GraphQL",
      "NodeJS",
      "ExpressJS",
      "TypeScript",
      "Python",
      "Redis"
    ]
  }

  const frontend = {
    title: t('technologies.categories.frontend'),
    technologies: [
      "React/Redux",
      "NextJS",
      "Three.js/WebGL",
      "Framer Motion",
      "GSAP",
      "MobX"
    ]
  }

  const database = {
    title: t('technologies.categories.database'),
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Sanity CMS"
    ]
  }

  const styling = {
    title: t('technologies.categories.styling'),
    technologies: [
      "SCSS",
      "TailwindCSS",
      "Styled Components",
      "CSS-in-JS"
    ]
  }

  const ai = {
    title: t('technologies.categories.ai'),
    technologies: [
      "OpenAI API",
      "RAG",
      "LangChain",
      "Puppeteer",
      "WebRTC"
    ]
  }

  const analytics = {
    title: t('technologies.categories.analytics'),
    technologies: [
      "A/B Testing",
      "Analytics",
      "Personalization",
      "Conversion Rate"
    ]
  }

  const creative = {
    title: t('technologies.categories.creative'),
    technologies: [
      "TouchDesigner",
      "P5.js",
      "Arduino",
      "WebSocket",
      "Web Audio API"
    ]
  }

  const tools = {
    title: t('technologies.categories.tools'),
    technologies: [
      "Git/GitLab",
      "Docker",
      "Vercel",
      "Telegram API",
      "REST API"
    ]
  }

  return (
    <Div>
      <StyledTechnologies animate={controls} ref={ref} variants={slideAnim.up}>
        <Header><span>04.</span> {t('technologies.title')}</Header>
        <Grid >
          <Techstack icon={faCode} title={backend.title} technologies={backend.technologies}/>
          <Techstack icon={faLaptopCode} title={frontend.title} technologies={frontend.technologies}/>
          <Techstack icon={faDatabase} title={database.title} technologies={database.technologies}/>
          <Techstack icon={faRuler} title={styling.title} technologies={styling.technologies}/>
          <Techstack icon={faRobot} title={ai.title} technologies={ai.technologies}/>
          <Techstack icon={faChartLine} title={analytics.title} technologies={analytics.technologies}/>
          <Techstack icon={faPalette} title={creative.title} technologies={creative.technologies}/>
          <Techstack icon={faMicrochip} title={tools.title} technologies={tools.technologies}/>
        </Grid>
      </StyledTechnologies>
    </Div>
  )
}

const StyledTechnologies = styled(Container)`
  flex-direction:  column;
`

const Header = styled.h2`
margin-bottom: 4rem;
`

const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  text-align: center;
`

export default Technologies