import { useState, useEffect, useRef } from 'react';

const TypeWriter = ({
  text = '',
  speed = 50,
  delay = 0,
  className = '',
  showCursor = true,
  cursorChar = '|',
  onComplete,
  threshold = 0.1,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const indexRef = useRef(0);

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

  useEffect(() => {
    if (!inView) return;

    const startTyping = () => {
      setIsTyping(true);
      indexRef.current = 0;

      const type = () => {
        if (indexRef.current < text.length) {
          setDisplayText((prev) => prev + text.charAt(indexRef.current));
          indexRef.current++;
          setTimeout(type, speed);
        } else {
          setIsTyping(false);
          onComplete?.();
        }
      };

      setTimeout(type, delay);
    };

    startTyping();
  }, [inView, text, speed, delay, onComplete]);

  useEffect(() => {
    if (showCursor && !isTyping) {
      const interval = setInterval(() => {
        setShowCursorState((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [showCursor, isTyping]);

  return (
    <span ref={ref} className={`typewriter ${className}`}>
      {displayText}
      {showCursor && (
        <span
          className={`cursor ${showCursorState ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypeWriter;
