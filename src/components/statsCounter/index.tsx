import React, { useEffect, useState } from "react";
import styles from "./statsCounter.module.css";

type StatItem = {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

interface StatsCounterProps {
  stats: StatItem[];
  color?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ stats, color }) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.target / 100;
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.target) {
            newCounts[index] = Math.min(
              newCounts[index] + increment,
              stat.target
            );
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [stats]);

  return (
    <div className={styles.container}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.statBox}>
          <div className={`${styles.value} ${color && styles[color]}`}>
            {stat.prefix || ""}
            {Math.floor(counts[i])}
            {stat.suffix || ""}
          </div>
          <div className={`${styles.label} ${color ? styles.white : ""}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
