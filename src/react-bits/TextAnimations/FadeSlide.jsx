import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const FadeSlide = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = '',
  threshold = 0.1,
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

  const directions = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeSlide;
