"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const TextHighligter: React.FC<{ text: string }> = ({ text }) => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value: number) =>
      setProgress(value + 100 * (value - Math.floor(value)))
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const words = text?.split(" ");

  return (
    <motion.div
      style={{
        maxWidth: "50rem",
        height: "auto",
        margin: "5rem auto",
      }}
    >
      <div
        style={{
          margin: "1rem auto",
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        <motion.div
          style={{
            fontSize: "48px",
            lineHeight: "1",
            textAlign: "left",
          }}
        >
          {words?.map((word, index) => (
            <motion.span
              key={index}
              style={{
                marginRight: "8px",
                display: "inline-block",
                color: progress > index / words.length ? "#DA2F58" : "#c4c4c4",
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <div
          style={{
            display: "flex",
            textAlign: "left",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "4rem",
              width: "4rem",
              background: "grey",
              borderRadius: "50%",
            }}
          ></div>
          <div>
            <h4>Owner Name</h4>
            <p>Founder, Bankersklub</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TextHighligter;
