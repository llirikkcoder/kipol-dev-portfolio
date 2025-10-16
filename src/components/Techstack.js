import React from 'react'
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScroll } from "../util/useScroll";
import { slideAnim } from "../animation";

function Techstack({title, technologies, icon}) {
    const [ref, controls] = useScroll();

  return (
  <motion.div
    className="flex items-center flex-col bg-[var(--color-bg)] py-8 rounded-[20px] [&_h4]:text-[0.8rem] [&_h4]:mt-4 [&_li]:text-[0.8rem] [&_li]:mt-2"
    animate={controls}
    ref={ref}
    variants={slideAnim.up}
  >
      <motion.div className="bg-[var(--color-second)] text-[var(--color-main)] p-4 rounded-full h-8 w-8 flex items-center justify-center">
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </motion.div>
      <ul>
          <li><h4>{title}</h4></li>
          {technologies?.map((technology) => (
              <li key={technology}>{technology}</li>
          ))}
      </ul>
 </motion.div>
  )
}

export default Techstack