import React from 'react'
import { Technologies } from '../styles/styles'
import { motion } from "framer-motion"
import { useScroll } from '../util/useScroll';
import { slideAnim } from "../animation"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/fontawesome-free-solid'

function Featured({title, image, text, link, technologies}) {
  const [ref, controls] = useScroll();

  return (
      <motion.div
        className="mb-16 min-[850px]:flex max-[850px]:[&_h3]:px-4"
        animate={controls}
        ref={ref}
        variants={slideAnim.up}
      >
         <div className="relative flex-1 flex items-center">
             <img src={image} alt="project_video" className="w-full h-full object-cover overflow-hidden" />
         </div>
         <div className="flex-1">
           <div className="p-4 px-8 [&_p]:font-bold [&_p]:text-[0.7rem] [&_p]:text-[var(--color-main)]">
             {/* <p>Featured</p> */}
             <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
           </div>
           <div className="p-8 bg-[var(--color-bg-2)]">
             {/* <p>{text}</p> */}
            <a href={text} target="_blank" rel="noreferrer"><h3>See demo</h3></a>
           </div>
           <div className="p-4 flex gap-3 items-center">
             <Technologies>
             {technologies?.map((technology) => (
               <li className="bg-[var(--color-second)] text-[var(--color-main)] px-2 py-1 text-[0.7rem] rounded-[20px]" key={technology}>{technology}</li>
             ))}
             </Technologies>
             <a href={link} target="_blank" rel="noreferrer" className="max-[850px]:translate-x-[5px]">
               <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
             </a>
           </div>
         </div>
      </motion.div>
  )
}

export default Featured;
