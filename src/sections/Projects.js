import React from 'react';
import { motion } from 'framer-motion';

import Featured from '../components/Featured';
import Archive from '../components/Archive';
import { useLanguage } from '../context/LanguageContext';
import shvoren from '../assets/images/shvoren.jpg';
import portfolio from '../assets/images/portfolio.jpg';
import museum from '../assets/images/museum.jpg';
import amberbitter from '../assets/images/amberbitter.jpg';
import dao from '../assets/images/eb.jpg';
import netevia from '../assets/images/netevia.jpg';
import langco from '../assets/images/langco.jpg';
import kk_clone from '../assets/images/kk_clone.jpg';
import idmed from '../assets/images/idmed.jpg';
import fairyland from '../assets/images/fairyland.jpg';
import amberbitter_lab from '../assets/images/amberbitter-lab.jpg';

const technologies1 = ['JS', 'React', 'Threejs', 'Gsap'];

const amberLab = ['Sanity', 'NextJS', 'Threejs', 'Framer-Motion'];

const technologies2 = ['JS', 'Threejs', 'Physics', 'React'];

const technologies3 = ['JS', 'React', 'React-motion'];

const daoTech = ['JS', 'HTML', 'CSS', 'Threejs'];

const neteviaTech = ['JS', 'React', 'Redux', 'Tailwind'];

const langcoTech = ['JS', 'NextJS', 'OpenAI', 'SCSS'];

const kkClone = ['NextJS', 'OpenAI', 'Supabase', 'RAG'];

const idMedTech = ['JS', 'NextJS', 'Tailwind', 'Sanity'];

const fairyLandTech = ['JS', 'NextJS', 'SCSS', 'GraphQL', 'MobX'];

// Новые проекты
const audienceCaptureWeb = ['React', 'Analytics', 'A/B Testing', 'Personalization'];
const aiAvatarTech = ['Python', 'RAG', 'LangChain', 'WebRTC'];
const interactiveInstallation = ['Arduino', 'TouchDesigner', 'WebSocket', 'P5.js'];
const businessAutomation = ['Node.js', 'Puppeteer', 'PostgreSQL', 'Redis'];

function Projects() {
  const { t } = useLanguage();
  return (
    <motion.div className="max-w-[1080px] px-8 py-20 mx-auto flex items-center flex-col" id='projects'>
      <motion.h2 className="pb-8 inline-block">
        <span>03.</span> {t('projects.title')}
      </motion.h2>
      <motion.div>
        <Featured
          image={amberbitter_lab}
          title='Laboratory of amber bitters with blog'
          text='https://amber-sanity-blog.vercel.app/'
          link='https://github.com/llirikkcoder/amber-sanity-blog'
          technologies={amberLab}
        />
        <Featured
          image={fairyland}
          title='FairyLand - Web application for AR-game platform'
          text='https://dev.cryptofairies.club'
          link='https://gitlab.com/crypto-fairy/frontend'
          technologies={fairyLandTech}
        />
        <Featured
          image={netevia}
          title='Netevia - bank web application'
          text='https://netevia.surge.sh/'
          link=''
          technologies={neteviaTech}
        />
        <Featured
          image={kk_clone}
          title='AI with RAG-technologie web application'
          text='https://kk-clone-chatgpt-your-files.vercel.app/'
          link='https://github.com/llirikkcoder/kk-clone-chatgpt-your-files'
          technologies={kkClone}
        />
        <Featured
          image={idmed}
          title='Website of the personal medicine clinic Idmed'
          text='https://www.idmed-clinic.ru/'
          link='https://gitlab.com/llirikk/stablo-blog-v2'
          technologies={idMedTech}
        />
        <Featured
          image={langco}
          title='Integration with OpenAI API to create language school exercises'
          text='https://lang-coach.com/ai'
          link=''
          technologies={langcoTech}
        />
        <Featured
          image={shvoren}
          title='Viktoria Shvoren 3d gallery'
          text='http://shvoren-3d-gallery.surge.sh/'
          link='https://gitlab.com/llirikk/vs_client'
          technologies={technologies1}
        />
        <Featured
          image={portfolio}
          title='My audio-visual promo website'
          text='http://kipol-site.surge.sh/'
          link='https://gitlab.com/llirikk/kipol_site'
          technologies={technologies2}
        />
        <Featured
          image={museum}
          title='Museum website'
          text='https://amk_fso_kpl.surge.sh/'
          link='https://gitlab.com/llirikk/amk-fso_kpl'
          technologies={technologies3}
        />
        <Featured
          image={amberbitter}
          title='AmberBitter drink landing'
          text='https://amberbitter.surge.sh/'
          link='https://github.com/llirikkcoder/amberbitter-landing'
          technologies={technologies1}
        />
        <Featured
          image={dao}
          title='DAO Concept - Hero page with three.js 3d model animation'
          text='https://flourishing-dodol-d12c3b.netlify.app/'
          link='https://github.com/llirikkcoder/html_dao'
          technologies={daoTech}
        />
      </motion.div>
      <Archive />
    </motion.div>
  );
}

export default Projects;
