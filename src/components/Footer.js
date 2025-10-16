import React from 'react'
import { Div, Container } from "../styles/styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Div>
      <Container className="flex-col p-8 gap-2 [&_p]:text-[0.7rem]">
        <p>Built with React, Framer Motion and Tailwind CSS. Coded in VS Code.</p>
        <a href="https://github.com/llirikkcoder" target='_blank' rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Container>
    </Div>
  )
}

export default Footer