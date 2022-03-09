import { useState } from "react";
import styles from "../styles/grid.module.css";

const point = {
  north: "👆",
  east: "👉",
  south: "👇",
  west: "👈",
};

const turn = {
  north: "east",
  east: "south",
  south: "west",
  west: "north",
};

export default function Home() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [direction, setDirection] = useState("east");

  const move = () => {

    if (direction === "north" && x === 0) {
      setDirection(turn[direction]);
      return;
    } else if (direction === "south" && x === 9) {
      setDirection(turn[direction]);
      return;
    } else if (direction === "east" && y === 9) {
      setDirection(turn[direction]);
      return;
    } else if (direction === "west" && y === 0) {
      setDirection(turn[direction]);
      return;
    }

    switch (direction) {
      case 'north':
        setx(--x);
        break;
      case 'east':
        sety(++y);
        break;
      case 'south':
        setx(++x);
        break;
      case 'west':
        sety(--y);
        break;
      default:
        setx(0);
        sety(0);
        setDirection('east');
    }

  };

  const turnRight = () => {
    setDirection(turn[direction]);
  };

  return (
    <>
      <button onClick={turnRight}>Turn Right</button>
      <button onClick={move}>Move Forward</button>
      <div className={styles.Grid}>
        {Array.from(new Array(10)).map((el, colIndex) => (
          <div key={colIndex} className={styles.Column}>
            {Array.from(new Array(10)).map((el, rowIndex) => (
              <div key={rowIndex} className={styles.Cell}>
                {colIndex === y && rowIndex === x ? point[direction] : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
