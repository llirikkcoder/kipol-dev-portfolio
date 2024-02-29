import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
      <motion.p >I am a web developer with over 4 years of experience building responsive and user friendly websites and apps. <br /> 
      <br/>
       I am fluent in React and Redux and well versed in modern web development technologies and best practices. I am a fast learner and always strive to be up to date with the latest developments in web development.</motion.p> <br />
      <p className='bold'>Recent technologies I've used:</p>
        <Technologies>
          <Social>
            <Circle/>
            <li>React/Redux</li>
          </Social>
          <Social>
            <Circle/>
            <li>JS/TS</li>
          </Social>
          <Social>
            <Circle/>
            <li>NodeJS</li>
          </Social>
          <Social>
            <Circle/>
            <li>SQL/Mongo</li>
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