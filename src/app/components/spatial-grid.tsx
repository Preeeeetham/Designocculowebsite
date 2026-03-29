import { motion } from "motion/react";

export function SpatialGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="spatial-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 106, 0, 0.15)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spatial-grid)" />
      </svg>
      
      {/* Diagonal scan line */}
      <motion.div
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#FF6A00]/40 to-transparent"
        style={{ transform: "rotate(-25deg)", transformOrigin: "center" }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
