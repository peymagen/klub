import React, { useRef, useEffect, useState } from "react";
import styles from "./approachSection.module.css";
import Image from "next/image";

const steps = ["Explore", "Select", "Connect", "Achieve"];

const ApproachSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = React.useCallback(() => {
    if (!containerRef.current) return;
    if (!hasScrolled) {
      setHasScrolled(true); // remove margin once scrolling starts
    }

    const container = containerRef.current;
    const children = Array.from(container.children) as HTMLElement[];

    const containerScrollLeft = container.scrollLeft;
    const containerCenter = containerScrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childLeft = child.offsetLeft;
      const childCenter = childLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, [hasScrolled]);

  useEffect(() => {
    const node = containerRef.current;
    if (node) {
      node.addEventListener("scroll", handleScroll);
    }

    return () => {
      node?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Our unique approach <br />
          to raise funds
        </h1>
        <button>Schedule a meeting</button>
      </div>
      <div className={styles.steps}>
        <hr />
        {steps.map((step, index) => (
          <button
            key={step}
            className={`${styles.stepButton} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            {step}
          </button>
        ))}
      </div>
      <div
        className={`${hasScrolled ? styles.ml_5 : ""} ${
          styles.scrollContainer
        }`}
        ref={containerRef}
      >
        {steps.map((step, index) => (
          <div className={styles.card} key={index}>
            <div>
              <h2>{String(index + 1).padStart(2, "0")}</h2>
              <p>Make informed financial decisions for your business</p>
            </div>
            <Image
              src="/faq_bg.png"
              alt="section approach"
              width={350}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachSection;
