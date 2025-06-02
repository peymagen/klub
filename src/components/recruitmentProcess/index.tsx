import React, { useEffect, useRef, useState } from "react";
import styles from "./recruitmentProcess.module.css";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Application And Recruiter Screen",
    description:
      "Candidates begin by submitting applications online. Our recruiters carefully screen each application to assess qualifications and cultural fit, ensuring alignment with our team values and job requirements.",
  },
  {
    number: "2",
    title: "First Round Interview",
    description:
      "Selected candidates participate in a first-round interview conducted by HR or hiring managers. This interview focuses on evaluating skills, experience, and enthusiasm for the role, aiming to identify potential matches for our team.",
  },
  {
    number: "3",
    title: "Task Or Challenge",
    description:
      "Shortlisted candidates are assigned a task or challenge relevant to the position. This step allows us to gauge problem-solving abilities, creativity, and practical skills necessary for success in the role.",
  },
  {
    number: "4",
    title: "Final Interview",
    description:
      "Candidates who excel in the task or challenge proceed to a final interview with senior leadership or department heads. This interview assesses alignment with our mission, vision, and long-term goals, ensuring a mutual fit for both the candidate and the company.",
  },
];

const RecruitmentProcess: React.FC = () => {
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timelineContainer}>
      <p className={styles.top_text}>
        <h1>
          <b>How we hire our team</b>
        </h1>
        <p>
          We like to keep things as simple as possible so we can get to what’s{" "}
          <br />
          really important - finding out more about you
        </p>
      </p>
      {steps.map((step, index) => (
        <div
          key={index}
          className={styles.stepContainer}
          ref={(el) => {
            if (el) stepRefs.current[index] = el;
          }}
        >
          <div className={styles.circle}></div>
          <div className={styles.contentBox}>
            <div className={styles.arrow}></div>
            <span className={styles.number}>{step.number}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`${styles.verticalLine} ${
                index <= activeStep ? styles.activeLine : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecruitmentProcess;
