import { motion } from "motion/react";

interface BrandDiagonalBarsProps {
  variant?: "orange" | "white" | "light";
  animated?: boolean;
  className?: string;
}

export function BrandDiagonalBars({ variant = "orange", animated = false, className = "" }: BrandDiagonalBarsProps) {
  const bars = [
    { width: "35%", height: "500px", x: "-5%", y: "-20%", opacity: 0.3 },
    { width: "30%", height: "600px", x: "15%", y: "-15%", opacity: 0.25 },
    { width: "40%", height: "700px", x: "40%", y: "-25%", opacity: 0.2 },
    { width: "35%", height: "550px", x: "70%", y: "-18%", opacity: 0.28 },
  ];

  const colors = {
    orange: "rgba(255, 133, 51, 0.6)",    // Lighter orange for orange backgrounds
    white: "rgba(255, 255, 255, 0.15)",   // White bars for dark backgrounds
    light: "rgba(255, 102, 0, 0.08)",     // Very light for white backgrounds
  };

  const dots = [
    { size: "120px", x: "8%", y: "5%", opacity: 0.2 },
    { size: "80px", x: "85%", y: "15%", opacity: 0.25 },
    { size: "100px", x: "25%", y: "75%", opacity: 0.18 },
    { size: "90px", x: "75%", y: "80%", opacity: 0.22 },
  ];

  const BarComponent = animated ? motion.div : "div";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Diagonal rounded bars */}
      {bars.map((bar, index) => (
        <BarComponent
          key={`bar-${index}`}
          className="absolute rounded-full"
          style={{
            width: bar.width,
            height: bar.height,
            background: colors[variant],
            transform: `rotate(-35deg)`,
            left: bar.x,
            top: bar.y,
            opacity: bar.opacity,
          }}
          {...(animated && {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: bar.opacity, y: 0 },
            transition: {
              duration: 1.2,
              delay: index * 0.2,
              ease: "easeOut",
            },
          })}
        />
      ))}
      
      {/* Circular dots */}
      {dots.map((dot, index) => (
        <BarComponent
          key={`dot-${index}`}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            background: colors[variant],
            left: dot.x,
            top: dot.y,
            opacity: dot.opacity,
          }}
          {...(animated && {
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: dot.opacity, scale: 1 },
            transition: {
              duration: 0.8,
              delay: 0.5 + index * 0.1,
              ease: "easeOut",
            },
          })}
        />
      ))}
    </div>
  );
}
