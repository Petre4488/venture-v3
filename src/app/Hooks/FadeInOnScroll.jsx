

import { motion, useScroll } from 'framer-motion';
 
export default function FadeInOnScroll({ children }) {
  const { scrollYProgress } = useScroll({ target: reference, offset: ["1 0", "1.5 1"] })
 
  return (
    <section className="" ref={ref} id="home">
    <motion.div
        ref={reference}
        style={{
            opacity: opacityProgess,
        }}
    >
        {children}
    </motion.div>
    </section>
  );
}
  