"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CelestialBackground() {
  const { resolvedTheme } = useTheme();
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>(
    []
  );

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {resolvedTheme === "dark" &&
        stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${2 + star.delay}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
    </div>
  );
}
