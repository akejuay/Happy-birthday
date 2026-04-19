import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Confetti({ trigger }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!trigger) return;

    const newPieces = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 1,
      duration: 3 + Math.random() * 2,
      size: 6 + Math.random() * 6,
      color: randomColor(),
    }));

    setPieces(newPieces);

    // Auto clear after animation
    setTimeout(() => setPieces([]), 5000);
  }, [trigger]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, }}>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            y: -20,
            x: piece.x,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            delay: piece.delay,
            duration: piece.duration,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

function randomColor() {
  const colors = ["#ffafcc", "#ffc8dd", "#bde0fe", "#cdb4db"];
  return colors[Math.floor(Math.random() * colors.length)];
}