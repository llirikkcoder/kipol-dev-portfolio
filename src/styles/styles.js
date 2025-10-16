import { motion } from "framer-motion";

export const Div = ({ children, ...props }) => (
  <motion.div style={{ background: 'var(--color-bg-2)' }} {...props}>
    {children}
  </motion.div>
);

export const Container = ({ children, className = "", ...props }) => (
  <motion.div
    className={`flex flex-wrap items-center max-w-[1080px] mx-auto px-8 py-20 max-[850px]:justify-center ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

export const Description = ({ children, ...props }) => (
  <motion.div className="flex flex-col items-start justify-start" {...props}>
    {children}
  </motion.div>
);

export const Hide = ({ children, ...props }) => (
  <div className="overflow-hidden" {...props}>
    {children}
  </div>
);

export const Circle = ({ ...props }) => (
  <div className="rounded-full w-2 h-2 mr-4 bg-[var(--color-main)]" {...props} />
);

export const Social = ({ children, ...props }) => (
  <motion.div className="flex items-center" {...props}>
    {children}
  </motion.div>
);

export const Technologies = ({ children, className = "", ...props }) => (
  <ul
    className={`flex justify-start gap-2 max-[850px]:px-4 max-[850px]:translate-x-[10px] ${className}`}
    {...props}
  >
    {children}
  </ul>
); 