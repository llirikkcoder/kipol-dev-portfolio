import React from 'react'
import styled from 'styled-components'
import { Technologies } from '../styles/styles'
import { motion } from "framer-motion"
import { useScroll } from '../util/useScroll';
import { slideAnim } from "../animation"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/fontawesome-free-solid'

function Featured({title, image, text, link, technologies}) {
  const [ref, controls] = useScroll();

  return (
      <FeaturedProject animate={controls} ref={ref} variants={slideAnim.up}>
         <Image>
             <Img src={image} alt="project_video" />
         </Image>
         <About>
           <Header>
             {/* <p>Featured</p> */}
             <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
           </Header>
           <AboutText>
             {/* <p>{text}</p> */}
            <a href={text} target="_blank" rel="noreferrer"><h3>See demo</h3></a>
           </AboutText>
           <More>
             <Technologies>
             {technologies?.map((technology) => (
               <li key={technology}>{technology}</li>
             ))}
             </Technologies>
             <CodeIcon href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></CodeIcon>
           </More>
         </About>
      </FeaturedProject>
  )
}

const FeaturedProject = styled(motion.div)`
  margin-bottom: 4rem;
  
  @media (min-width: 850px) {
    display: flex;
  }
  @media (max-width: 850px) {
    h3{
      padding: 0 1rem;
    }
  }
`;

const Header = styled.div`
padding: 1rem 2rem;
p{
  font-weight: bold;
  font-size: 0.7rem;
  color: var(--color-main)
}
`
const AboutText = styled.div`
  padding: 2rem;
  background: var(--color-bg-2);
`
const More = styled.div`
padding: 1rem;
display: flex;
gap: 0.75rem;
align-items: center;
`

const About = styled.div`
  flex: 1;
`

const Image = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

const CodeIcon = styled.a`
  @media (max-width: 850px) {
    transform: translate(5px, 0);
  }
`

export default Featured;
