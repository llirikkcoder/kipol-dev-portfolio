import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from "../styles/styles"
import { slideAnim } from "../animation"
import { useScroll } from '../util/useScroll';

const Archive = () => {
  const [ref, controls] = useScroll();

  return (
    <Container
      className="flex items-center flex-col p-0 max-w-[800px] [&_p]:text-[0.8rem] [&_h3]:text-[0.8rem] [&_a_p]:text-[0.8rem] [&_a_p]:underline [&_a_p]:text-[var(--color-main)] [&_a_p]:py-2"
      animate={controls}
      ref={ref}
      variants={slideAnim.up}
    >
      <motion.div>
        {/* <Link to="/archive"><h3>ALL PROJECTS</h3></Link> */}
      </motion.div>
      {/* <Link to="/archive"><p>View Archive</p></Link> */}
       <p>Looking back at my old projects, I often notice areas for improvement because I have grown and learned since then. Either way, I choose to keep them as a way to track my progress.</p>
    </Container>
  )
}

export default Archive