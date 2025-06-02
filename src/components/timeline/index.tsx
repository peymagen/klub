import React, { useEffect, useRef, useState } from "react";
import styles from "./timeline.module.css";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const Timeline: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Apply",
      description:
        "Take a few minutes to fill out a short application. You'll hear back from us within 48 hours.",
    },
    {
      number: "2",
      title: "Connect",
      description:
        "Share the perks of Landing life with your audience. Create content, write reviews, and share your affiliate link across your preferred networks.",
    },
    {
      number: "3",
      title: "Strategies",
      description:
        "Consumers click through to Landing's site and convert to members who embrace the flexibility and freedom we offer.",
    },
    {
      number: "4",
      title: "Achieve",
      description:
        "Get commissions on every successful conversion. We offer competitive affiliate rates for our industry.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setVisibleSteps((prev) => {
                // Only add if not already in array
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Copy refs to a local variable for cleanup
    const refsForCleanup = [...stepRefs.current];

    return () => {
      refsForCleanup.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add scroll listener for sequential reveal
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate how far we've scrolled through the container
        const scrollProgress =
          (scrollPosition - containerTop) / (containerHeight - windowHeight);

        // Determine which steps should be visible based on scroll progress
        const stepsToShow = Math.min(
          steps.length,
          Math.max(
            visibleSteps.length,
            Math.floor(scrollProgress * steps.length) + 1
          )
        );

        // Only update if we have new steps to show
        if (stepsToShow > visibleSteps.length) {
          setVisibleSteps(Array.from({ length: stepsToShow }, (_, i) => i));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSteps.length, steps.length]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.processContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className={`${styles.processStep} ${
              visibleSteps.includes(index) ? styles.visible : ""
            }`}
            style={{
              transitionDelay: visibleSteps.includes(index)
                ? `${index * 0.1}s`
                : "0s",
            }}
          >
            <div className={styles.stepNumber}>{step.number}</div>
            <h2 className={styles.stepTitle}>{step.title}</h2>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
