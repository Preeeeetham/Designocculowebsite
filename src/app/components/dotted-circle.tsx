import { motion } from "motion/react";

interface DottedCircleProps {
  size?: number;
  color?: string;
  animated?: boolean;
  className?: string;
}

export function DottedCircle({ size = 200, color = "#FF6600", animated = false, className = "" }: DottedCircleProps) {
  const dots: { x: number; y: number; delay: number }[] = [];
  const radius = size / 2;
  const dotCount = 80;
  
  // Create dots in a circle pattern with density gradient
  for (let i = 0; i < dotCount; i++) {
    const angle = (i / dotCount) * Math.PI * 2;
    const r = radius * 0.85;
    const x = radius + Math.cos(angle) * r;
    const y = radius + Math.sin(angle) * r;
    
    // Add some randomness for organic feel
    const jitter = 3;
    dots.push({
      x: x + (Math.random() - 0.5) * jitter,
      y: y + (Math.random() - 0.5) * jitter,
      delay: i * 0.01,
    });
  }

  const DotComponent = animated ? motion.circle : "circle";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((dot, i) => (
        <DotComponent
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={1.5}
          fill={color}
          {...(animated && {
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
            transition: {
              duration: 0.4,
              delay: dot.delay,
              ease: "easeOut",
            },
          })}
        />
      ))}
    </svg>
  );
}
