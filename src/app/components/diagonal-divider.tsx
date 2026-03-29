interface DiagonalDividerProps {
  className?: string;
  direction?: "left" | "right";
}

export function DiagonalDivider({ className = "", direction = "left" }: DiagonalDividerProps) {
  const path = direction === "left" 
    ? "M 0 0 L 100 0 L 100 100 Z" 
    : "M 0 0 L 100 0 L 0 100 Z";
  
  return (
    <div className={`absolute left-0 right-0 h-24 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path d={path} fill="currentColor" />
      </svg>
    </div>
  );
}
