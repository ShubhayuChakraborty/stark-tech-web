import { useRef, useEffect, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tiltMaxAngle?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  style,
  tiltMaxAngle = 15,
  perspective = 1000,
  scale = 1.05,
  speed = 400,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * tiltMaxAngle;
      const rotateY = ((x - centerX) / centerX) * tiltMaxAngle;
      
      card.style.transform = `
        perspective(${perspective}px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;
      
      // Update glow position
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      card.style.setProperty('--glow-x', `${glowX}%`);
      card.style.setProperty('--glow-y', `${glowY}%`);
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(${perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
      `;
    };

    const handleMouseEnter = () => {
      card.style.transition = 'none';
    };

    const handleTransitionEnd = () => {
      if (!card.matches(':hover')) {
        card.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.320, 1)`;
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [tiltMaxAngle, perspective, scale, speed]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: `transform ${speed}ms cubic-bezier(0.23, 1, 0.320, 1)`,
        '--glow-x': '50%',
        '--glow-y': '50%',
        ...style,
      } as React.CSSProperties}
    >
      <div className="tilt-card-inner">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;