import { motion } from "motion/react";

export function FlowLines() {
  const lines = [
    { x1: "0%", y1: "20%", x2: "100%", y2: "30%", delay: 0 },
    { x1: "0%", y1: "40%", x2: "100%", y2: "50%", delay: 0.3 },
    { x1: "0%", y1: "60%", x2: "100%", y2: "45%", delay: 0.6 },
    { x1: "0%", y1: "80%", x2: "100%", y2: "70%", delay: 0.9 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0" />
          <stop offset="30%" stopColor="#FF6A00" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#FF6A00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {lines.map((line, index) => (
        <motion.line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="url(#flowGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 2, delay: line.delay, repeat: Infinity, repeatDelay: 1 },
            opacity: { duration: 0.3, delay: line.delay }
          }}
        />
      ))}
    </svg>
  );
}
