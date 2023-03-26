// SnakeGame.tsx

import React, { useEffect, useRef, useState } from "react";

type Coordinate = {
  x: number;
  y: number;
};

type position = "left_top" | "left_bottom" | "right_top" | "right_bottom";

type SnakeGameProps = {
  topOffset: number;
  position: position;
};

const getInitSnake = (position: position, gameSizeX: number, gameSizeY: number) => {
  switch (position) {
    case "left_top":
      return { cordinate: { x: 20, y: 10 }, direction: { x: 1, y: 0 } };
    case "left_bottom":
      return { cordinate: { x: 20, y: gameSizeY - 10 }, direction: { x: 1, y: 0 } };
    case "right_top":
      return { cordinate: { x: gameSizeX - 20, y: 10 }, direction: { x: -1, y: 0 } };
    case "right_bottom":
      return { cordinate: { x: gameSizeX - 20, y: gameSizeY - 10 }, direction: { x: -1, y: 0 } };
  }
};

export const SnakeGame: React.FC<SnakeGameProps> = ({ topOffset, position }) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight - topOffset;
  const cellSize = 10;
  const cellSpacing = 3;
  const gameSizeX = Math.floor(viewportWidth / (cellSize + cellSpacing));
  const gameSizeY = Math.floor((viewportHeight - cellSpacing) / (cellSize + cellSpacing));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const initSnake = getInitSnake(position, gameSizeX, gameSizeY);

  const [snake, setSnake] = useState<Coordinate[]>(Array(25).fill(initSnake.cordinate));
  const [direction, setDirection] = useState<Coordinate>(initSnake.direction);

  useEffect(() => {
    const handleInterval = () => {
      setSnake((currentSnake) => {
        const newHead: Coordinate = {
          x: (currentSnake[0].x + direction.x + gameSizeX) % gameSizeX,
          y: (currentSnake[0].y + direction.y + gameSizeY) % gameSizeY,
        };

        return [newHead, ...currentSnake.slice(0, -1)];
      });
    };

    intervalRef.current = setInterval(handleInterval, 250);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [direction]);

  useEffect(() => {
    const directions: Coordinate[] = [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ];

    const changeDirection = () => {
      let newDirectionIndex: number;

      do {
        newDirectionIndex = Math.floor(Math.random() * directions.length);
      } while (
        (directions[newDirectionIndex].x === -direction.x && directions[newDirectionIndex].y === -direction.y) ||
        (directions[newDirectionIndex].x === direction.x && directions[newDirectionIndex].y === direction.y)
      );

      setDirection(directions[newDirectionIndex]);
    };

    const randomInterval = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;
    const timeoutId = setInterval(changeDirection, randomInterval);

    return () => {
      clearInterval(timeoutId);
    };
  }, [direction]);

  return (
    <div
      // className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      style={{
        width: "100vw",
        height: `calc(100vh - ${topOffset}px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        overflow: "hidden",
        top: topOffset,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gameSizeX}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${gameSizeY}, ${cellSize}px)`,
          width: `${gameSizeX * (cellSize + cellSpacing)}px`,
          height: `${gameSizeY * (cellSize + cellSpacing)}px`,
          gap: `${cellSpacing}px`,
        }}
      >
        {Array.from({ length: gameSizeX * gameSizeY }, (_, index) => {
          const x = index % gameSizeX;
          const y = Math.floor(index / gameSizeX);
          const isSnake = snake.some((segment) => segment.x === x && segment.y === y);

          return (
            <div
              key={index}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                borderRadius: "50%",
                backgroundColor: isSnake ? "white" : "transparent",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
