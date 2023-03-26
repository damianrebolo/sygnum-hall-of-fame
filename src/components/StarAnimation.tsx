import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const StarAnimation: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  const generateStar = (): Star => {
    return {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 7,
      opacity: Math.random(),
    };
  };

  useEffect(() => {
    const addStar = () => {
      setStars((prevStars) => [...prevStars, generateStar()]);
    };

    const removeStar = () => {
      setStars((prevStars) => prevStars.slice(1));
    };

    const birthInterval = setInterval(addStar, 500);
    const deathInterval = setInterval(removeStar, 1500);

    return () => {
      clearInterval(birthInterval);
      clearInterval(deathInterval);
    };
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-60 z-10"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </>
  );
};

export default StarAnimation;
