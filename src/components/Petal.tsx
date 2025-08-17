import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  key: number; // tambahan agar bisa pakai untuk re-render
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initialPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      key: Date.now() + i, // unik agar motion reset
      x: Math.random() * window.innerWidth,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 4 + 6, // 6 - 10 detik
      delay: Math.random() * 5,
    }));
    setPetals(initialPetals);
  }, []);

  const resetPetal = (id: number) => {
    setPetals((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              key: Date.now() + Math.random(), // ganti key agar animasi restart
              x: Math.random() * window.innerWidth,
              size: Math.random() * 40 + 20,
              duration: Math.random() * 4 + 6,
              delay: Math.random() * 3, // random delay lagi
            }
          : p
      )
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[9999]">
      {petals.map((p) => (
        <motion.div
          key={p.key} // penting agar animasi ulang
          className="bg-rose-300"
          style={{
            position: "absolute",
            top: -50,
            left: p.x,
            width: p.size,
            height: p.size,
          }}
          initial={{ y: -100, rotate: 0 }}
          animate={{ y: window.innerHeight + 100, rotate: 360 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "linear",
          }}
          onAnimationComplete={() => resetPetal(p.id)}
        />
      ))}
    </div>
  );
}
