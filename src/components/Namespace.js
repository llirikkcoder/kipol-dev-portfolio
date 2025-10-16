import React from 'react'
import { motion } from "framer-motion"
import { useScroll } from "../util/useScroll";
import { slideAnim } from "../animation";
import '../styles/namespace.css';

function Namespace() {

    const [ref, controls] = useScroll();
    const currentYear = new Date().getFullYear();
    const age = currentYear - 1985;

  return (
    <>
     <motion.div
        className="rounded-[20px] max-h-[19rem] border-4 border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--color-shadow)] p-8 transition-all duration-100 ease-in-out flex-[2] leading-[130%] animate-[float_3s_infinite_alternate] max-[850px]:mt-12 [&_h4]:text-[var(--color-className)] [&_h4]:inline-block [&_p]:text-[0.8rem] [&_p]:text-left [&_p]:text-[var(--color-header)] [&_div]:text-[0.8rem] [&_div]:text-left [&_div]:text-[var(--color-header)] [&_span]:text-[var(--color-keyword)]"
        animate={controls}
        ref={ref}
        id="about"
        variants={slideAnim.right}
      >
        <motion.div className="flex w-full flex-row items-center justify-start mb-4 [&_.circle]:h-[10px] [&_.circle]:w-[10px] [&_.circle]:mr-2 [&_.circle]:rounded-full [&_.circle]:bg-[#ff5e59] [&_.circle:nth-child(2)]:bg-[#ffbb2e] [&_.circle:nth-child(3)]:bg-[#22ce32]">
            <div className="circle"></div>
            <div className="circle2 circle"></div>
            <div className="circle3 circle"></div>
        </motion.div>
        <p>
            <span>namespace</span> Portfolio<br/>&#123;
        </p>
            <div className="ml-6 [&_span]:text-[var(--color-keyword)]">
                <span>public class</span> Kirill : Person<br />
                &#123; <br/>
                <motion.div className="ml-6 [&_span]:text-[var(--color-keyword)]">
                    <span>public int</span>  Age &#123; get; &#125; = {age};<br/>
                    <span>public string</span> City &#123; get; &#125; = "Batumi";<br/>
                    <span>public string</span> Work &#123; get; &#125; = "Web dev";<br/>
                </motion.div>
                &#125;
            </div>
        &#125;
    </motion.div>
    </>

)}

export default Namespace