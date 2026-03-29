import { motion } from "motion/react";

interface DiagonalBarsProps {
  variant?: "light" | "orange" | "white";
  animated?: boolean;
  className?: string;
}

export function DiagonalBars({ variant = "orange", animated = false, className = "" }: DiagonalBarsProps) {
  const bars = [
    { width: "28%", height: "320px", delay: 0, x: "10%", y: "-15%" },
    { width: "22%", height: "280px", delay: 0.2, x: "35%", y: "-10%" },
    { width: "18%", height: "240px", delay: 0.4, x: "58%", y: "-8%" },
    { width: "25%", height: "300px", delay: 0.6, x: "75%", y: "-12%" },
  ];

  const colors = {
    light: "rgba(255, 106, 0, 0.08)",
    orange: "rgba(255, 106, 0, 0.12)",
    white: "rgba(255, 255, 255, 0.1)",
  };

  const BarComponent = animated ? motion.div : "div";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bars.map((bar, index) => (
        <BarComponent
          key={index}
          className="absolute rounded-full"
          style={{
            width: bar.width,
            height: bar.height,
            background: colors[variant],
            transform: `rotate(-35deg)`,
            left: bar.x,
            top: bar.y,
            backdropFilter: "blur(40px)",
          }}
          {...(animated && {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: 1.2,
              delay: bar.delay,
              ease: "easeOut",
            },
          })}
        />
      ))}
    </div>
  );
}
