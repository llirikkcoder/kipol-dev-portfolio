import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import { staggerAnim, slideAnim } from "../animation";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';


const Nav = ( {toggleTheme, theme} ) => {
  const [isMenuActive, toggleMenu] = useState(false);
  const { pathname } = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <motion.div
      className="z-10 fixed left-0 right-0"
      style={{ background: 'linear-gradient(to bottom, var(--color-bg) 0%, rgba(0,0,0,0) 100%)' }}
    >
      <motion.nav
        variants={slideAnim.down}
        initial="hidden"
        animate="show"
        className="max-w-[1080px] mx-auto px-8 py-4 flex justify-between"
      >
          <motion.div
            onClick={scrollTop}
            className="z-[2] flex items-center"
          >
            <Link to="/">
              <h1 className="text-xl font-light">
                &lt;<span className="text-[var(--color-main)]">Kirill Pavliashik </span>/&gt;
              </h1>
            </Link>
          </motion.div>

          { pathname === "/" && (
            <>
            <motion.ul
              variants={staggerAnim}
              className={`flex gap-8 backdrop-blur-[10px] border-2 border-[var(--color-border)] rounded-[10px] px-8 py-4 max-[700px]:flex-col max-[700px]:items-center max-[700px]:justify-center max-[700px]:fixed max-[700px]:top-0 max-[700px]:left-0 max-[700px]:w-full max-[700px]:h-full max-[700px]:transition-transform max-[700px]:duration-300 max-[700px]:ease-in-out ${isMenuActive ? 'max-[700px]:translate-x-0' : 'max-[700px]:translate-x-full'}`}
              style={{ backgroundColor: 'var(--color-nav)' }}
            >
              <motion.li
                variants={slideAnim.down}
                className="text-[0.8rem] max-[700px]:text-[1.6rem]"
              >
                <a href="#about" onClick={() => toggleMenu(false)}>
                  <span className="text-[var(--color-main)] font-[var(--font-mono)] text-[0.7rem] max-[700px]:text-[1.2rem]">01.</span> {t('nav.about')}
                </a>
              </motion.li>
              <motion.li
                variants={slideAnim.down}
                className="text-[0.8rem] max-[700px]:text-[1.6rem]"
              >
                <a href="#services" onClick={() => toggleMenu(false)}>
                  <span className="text-[var(--color-main)] font-[var(--font-mono)] text-[0.7rem] max-[700px]:text-[1.2rem]">02.</span> {t('nav.services')}
                </a>
              </motion.li>
              <motion.li
                variants={slideAnim.down}
                className="text-[0.8rem] max-[700px]:text-[1.6rem]"
              >
                <a href="#projects" onClick={() => toggleMenu(false)}>
                  <span className="text-[var(--color-main)] font-[var(--font-mono)] text-[0.7rem] max-[700px]:text-[1.2rem]">03.</span> {t('nav.projects')}
                </a>
              </motion.li>
              <motion.li
                variants={slideAnim.down}
                className="text-[0.8rem] max-[700px]:text-[1.6rem]"
              >
                <a href="#contact" onClick={() => toggleMenu(false)}>
                  <span className="text-[var(--color-main)] font-[var(--font-mono)] text-[0.7rem] max-[700px]:text-[1.2rem]">04.</span> {t('nav.contact')}
                </a>
              </motion.li>
              <motion.li variants={slideAnim.down}>
                <label className="cursor-pointer">
                    {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                    <input onClick={toggleTheme} className="opacity-0 m-0 p-0 w-0"/>
                </label>
              </motion.li>
              <motion.li variants={slideAnim.down}>
                <button
                  onClick={toggleLanguage}
                  className="bg-transparent border border-[var(--color-main)] text-[var(--color-main)] px-2.5 py-1.5 rounded text-[0.8rem] cursor-pointer font-[var(--font-mono)] transition-all duration-300 hover:bg-[var(--color-main)] hover:text-[var(--color-bg)]"
                >
                  {language === 'ru' ? 'EN' : 'RU'}
                </button>
              </motion.li>
            </motion.ul>

            {/* MOBILE BURGER */}
            <motion.div
              onClick={() => toggleMenu(!isMenuActive)}
              className="hidden text-[var(--color-main)] text-xl max-[700px]:flex max-[700px]:items-center max-[700px]:h-10 max-[700px]:w-10 max-[700px]:rounded-full max-[700px]:z-[2] max-[700px]:justify-center"
              style={{ background: 'var(--color-second)' }}
            >
              <FontAwesomeIcon icon={isMenuActive ? faTimes : faBars}></FontAwesomeIcon>
            </motion.div>
            </>
          )}
      </motion.nav>
    </motion.div>
  )
}

export default Nav;