import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const ScaleReveal = ({
  children,
  delay = 0,
  duration = 0.7,
  scale = 0.8,
  className = '',
  threshold = 0.1,
  spring = true,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const variants = {
    hidden: {
      opacity: 0,
      scale: scale,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
    },
  };

  const transition = spring
    ? {
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }
    : {
        duration,
        delay,
        ease: 'easeOut',
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={transition}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleReveal;
