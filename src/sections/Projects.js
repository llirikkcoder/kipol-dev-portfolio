import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

import Featured from '../components/Featured';
import Archive from '../components/Archive';
import shvoren from "../assets/images/shvoren.jpg"
import portfolio from "../assets/images/portfolio.jpg"
import museum from "../assets/images/museum.jpg"
import amberbitter from "../assets/images/amberbitter.jpg"
import dao from "../assets/images/eb.jpg"
import netevia from "../assets/images/netevia.jpg"

const technologies1 = [
  "JavaScript",
  "React",
  "Threejs",
  "Gsap"
]

const technologies2 = [
  "JavaScript",
  "Threejs",
  "Physics",
  "React",
]

const technologies3 = [
  "JavaScript",
  "React",
  "HTML/CSS",
  "React-motion"
]

const daoTech = [
  "JavaScript",
  "HTML",
  "CSS",
  "Threejs"
]

const neteviaTech = [
  "JavaScript",
  "React",
  "Redux",
  "TailwindCSS"
]

function Projects() {
  return (
      <StyledProjects id="projects">
        <Header><span>02.</span> PROJECTS</Header>
        <FeaturedContainer>
          <Featured 
            image={shvoren} 
            title="Viktoria Shvoren 3d gallery"
            text="http://shvoren-3d-gallery.surge.sh/"
            link="https://gitlab.com/llirikk/vs_client"
            technologies={technologies1} />
          <Featured 
            image={portfolio} 
            title="My audio-visual promo website"
            text="https://confident-jang-29f63e.netlify.app/"
            link="https://gitlab.com/llirikk/kipol_site"
            technologies={technologies2} />
          <Featured 
            image={museum} 
            title="Museum website"
            text="https://amk_fso_kpl.surge.sh/"
            link="https://gitlab.com/llirikk/amk-fso_kpl"
            technologies={technologies3} />
          <Featured 
            image={amberbitter} 
            title="AmberBitter drink landing"
            text="https://amberbitter.surge.sh/"
            link="https://github.com/llirikkcoder/amberbitter-landing"
            technologies={technologies1} />
          <Featured 
            image={dao} 
            title="DAO Concept - Hero page with three.js 3d model animation"
            text="https://flourishing-dodol-d12c3b.netlify.app/"
            link="https://github.com/llirikkcoder/html_dao"
            technologies={daoTech} />
          <Featured 
            image={netevia} 
            title="Netevia - bank web application"
            text="https://netevia.surge.sh/"
            link=""
            technologies={neteviaTech} />
        </FeaturedContainer >
        <Archive />
      </StyledProjects>
  )
}

const StyledProjects = styled(motion.div)`
  max-width: 1080px;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: inline-block;
`

const FeaturedContainer = styled(motion.div)`

`



export default Projects;