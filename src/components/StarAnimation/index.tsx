// src/components/StarAnimation.tsx
import React, { useEffect, useState } from "react";
import "./StarAnimation.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  bornAt: number;
  lifespan: number;
}

export const StarAnimation: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  const replaceStar = (starId: number) => {
    setStars((prevStars) => {
      const newStar = generateStar();
      const updatedStars = prevStars.map((s) => (s.id === starId ? newStar : s));
      return updatedStars;
    });
  };

  const generateStar = (): Star => {
    const star = {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4,
      opacity: Math.random(),
      bornAt: Date.now(),
      lifespan: Math.random() * 4000 + 2000,
    };

    setTimeout(() => {
      replaceStar(star.id);
    }, star.lifespan);

    return star;
  };

  useEffect(() => {
    const initialStars = Array.from({ length: 200 }, () => generateStar());
    setStars(initialStars);
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute star-animation bg-white rounded-full opacity-60`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.lifespan / 2000}s`,
          }}
        />
      ))}
    </div>
  );
};
