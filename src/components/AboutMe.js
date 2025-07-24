import React from 'react'
import {Description, Social, Circle} from "../styles/styles";
import styled from 'styled-components';
import { motion } from "framer-motion";

function AboutMe() {

  return (
    <StyledAboutMe>
      <motion.p><strong>Инженер воображения. Строю мосты между технологией, телом и чувствами.</strong><br /> 
      <br/>
      Соединяю технологии, искусство и здоровье в высокоценностные продукты с человеческим лицом. Создаю интеллектуальные и сенсорные системы, которые не только решают задачи, но и вдохновляют.</motion.p> <br />
      <p className='bold'>Ключевые направления:</p>
        <Technologies>
          <Social>
            <Circle/>
            <li>AI & Автоматизация</li>
          </Social>
          <Social>
            <Circle/>
            <li>Интерактивный Web</li>
          </Social>
          <Social>
            <Circle/>
            <li>Art-Science проекты</li>
          </Social>
          <Social>
            <Circle/>
            <li>Воронки продаж</li>
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