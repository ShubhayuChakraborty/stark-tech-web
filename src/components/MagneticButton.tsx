import React, { useRef, useEffect, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'default',
  size = 'default',
  strength = 0.3,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const magneticRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      if (distance < 150) {
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        
        magneticRef.current = { x: deltaX, y: deltaY };
        
        button.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
        button.style.transition = 'none';
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
      button.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)';
      magneticRef.current = { x: 0, y: 0 };
    };

    const handleMouseEnter = () => {
      button.style.transition = 'none';
    };

    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength]);

  return (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      style={{
        transformOrigin: 'center',
      }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Ripple effect on hover */}
      <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 transition-opacity duration-300 hover:opacity-100" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 blur-sm transition-opacity duration-300 hover:opacity-30 -z-10" />
    </Button>
  );
};

export default MagneticButton;