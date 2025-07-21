import { useEffect, useRef } from 'react';

const MorphingShapes = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    let animationId: number;

    const morphShapes = () => {
      paths.forEach((path, index) => {
        const time = Date.now() * 0.001 + index * 2;
        
        // Generate dynamic path data
        const points = [];
        const numPoints = 6;
        const centerX = 200;
        const centerY = 200;
        const baseRadius = 100 + index * 50;
        
        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2 + time * 0.5;
          const radius = baseRadius + Math.sin(time * 2 + i) * 30;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          points.push(`${x},${y}`);
        }
        
        const pathData = `M ${points[0]} ` + 
          points.slice(1).map((point, i) => {
            const nextPoint = points[(i + 2) % points.length];
            return `Q ${point} ${nextPoint}`;
          }).join(' ') + ' Z';
        
        path.setAttribute('d', pathData);
      });
      
      animationId = requestAnimationFrame(morphShapes);
    };

    morphShapes();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="morphGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="morphGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path
          fill="url(#morphGradient1)"
          filter="url(#glow)"
          style={{ mixBlendMode: 'multiply' }}
        />
        <path
          fill="url(#morphGradient2)"
          filter="url(#glow)"
          style={{ mixBlendMode: 'screen' }}
        />
      </svg>
    </div>
  );
};

export default MorphingShapes;