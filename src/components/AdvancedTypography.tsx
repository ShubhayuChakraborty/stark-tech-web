import { useEffect, useRef } from 'react';

interface AdvancedTypographyProps {
  text: string;
  className?: string;
  variant?: 'gradient' | 'glow' | 'split' | 'wave';
}

const AdvancedTypography: React.FC<AdvancedTypographyProps> = ({
  text,
  className = '',
  variant = 'gradient',
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element || variant !== 'wave') return;

    const letters = element.querySelectorAll('.letter');
    let animationId: number;

    const animateWave = () => {
      const time = Date.now() * 0.003;
      
      letters.forEach((letter, index) => {
        const offset = Math.sin(time + index * 0.3) * 10;
        (letter as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
      
      animationId = requestAnimationFrame(animateWave);
    };

    if (letters.length > 0) {
      animateWave();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [variant, text]);

  const renderText = () => {
    if (variant === 'split' || variant === 'wave') {
      return text.split('').map((letter, index) => (
        <span
          key={index}
          className={`letter inline-block ${
            variant === 'split' ? 'split-char' : ''
          }`}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ));
    }
    
    return text;
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift';
      case 'glow':
        return 'text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.5)] animate-pulse';
      case 'split':
        return 'text-foreground';
      case 'wave':
        return 'text-foreground';
      default:
        return '';
    }
  };

  return (
    <div
      ref={textRef}
      className={`${getVariantClasses()} ${className}`}
      style={{
        backgroundSize: variant === 'gradient' ? '200% 200%' : undefined,
      }}
    >
      {renderText()}
    </div>
  );
};

export default AdvancedTypography;