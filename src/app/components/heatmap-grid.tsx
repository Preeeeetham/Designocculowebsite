import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function HeatmapGrid() {
  const [grid, setGrid] = useState<number[][]>([]);
  
  useEffect(() => {
    // Generate density heatmap data
    const rows = 12;
    const cols = 16;
    const newGrid: number[][] = [];
    
    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
      for (let j = 0; j < cols; j++) {
        // Create hotspots with gaussian-like distribution
        const centerX = cols / 2;
        const centerY = rows / 2;
        const distance = Math.sqrt(Math.pow(j - centerX, 2) + Math.pow(i - centerY, 2));
        const value = Math.max(0, 1 - distance / 8) + Math.random() * 0.3;
        row.push(Math.min(1, value));
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  }, []);

  const getColor = (value: number) => {
    if (value > 0.7) return "#FF6A00";
    if (value > 0.5) return "#FF8533";
    if (value > 0.3) return "#404040";
    return "#1a1a1a";
  };

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(16, 1fr)` }}>
      {grid.map((row, i) =>
        row.map((value, j) => (
          <motion.div
            key={`${i}-${j}`}
            className="aspect-square"
            style={{
              backgroundColor: getColor(value),
              opacity: value * 0.9 + 0.1,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: value * 0.9 + 0.1 }}
            transition={{ delay: (i + j) * 0.01, duration: 0.3 }}
          />
        ))
      )}
    </div>
  );
}
