import React, { useState, useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const DOT_SIZE = 10;
const DOT_COUNT = 50;
const DOT_SPEED = 2;

export function DotSnakeAnimation() {
  const [dots, setDots] = useState<Dot[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const newDots: Dot[] = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      newDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * DOT_SPEED * 2 - DOT_SPEED,
        vy: Math.random() * DOT_SPEED * 2 - DOT_SPEED,
      });
    }
    setDots(newDots);

    const intervalId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      newDots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < -DOT_SIZE) dot.x += canvas.width + DOT_SIZE * 2;
        if (dot.x > canvas.width + DOT_SIZE) dot.x -= canvas.width + DOT_SIZE * 2;
        if (dot.y < -DOT_SIZE) dot.y += canvas.height + DOT_SIZE * 2;
        if (dot.y > canvas.height + DOT_SIZE) dot.y -= canvas.height + DOT_SIZE * 2;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    canvas.width = container?.offsetWidth ?? 0;
    canvas.height = container?.offsetHeight ?? 0;
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
