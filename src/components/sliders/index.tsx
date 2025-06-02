"use client";
import style from "./sliders.module.css";
import { useRef } from "react";
import TestimonialCard from "./testimonialCard";

export default function Slider() {
  const ref = useRef<HTMLDivElement>(null);
  const refs = useRef<HTMLDivElement>(null);
  const efs = useRef<HTMLDivElement>(null);
  interface Testimonial {
    // Define the properties of the testimonial object here
    id: string;
    name: string;
    content: string;
    position: string;
    video: string;
    // Add other properties as needed
  }

  const testimonial: Testimonial[] = [
    {
      id: "1",
      name: "Sudeep Goenka",
      position: "CEO, Goenka Group",
      content: "“bankersklub give me a cnfidence I needed”",
      video:
        "https://api-bankers.basukalaiti.com/uploads/video-1740683257339.mp4",
    },
    {
      id: "2",
      name: "Sudeep Goenka",
      position: "CEO, Goenka Group",
      content: "“bankersklub give me a cnfidence I needed”",
      video:
        "https://api-bankers.basukalaiti.com/uploads/video-1740683257339.mp4",
    },
    {
      id: "3",
      name: "Sudeep Goenka",
      position: "CEO, Goenka Group",
      content: "“bankersklub give me a cnfidence I needed”",
      video:
        "https://api-bankers.basukalaiti.com/uploads/video-1740683257339.mp4",
    },
    {
      id: "4",
      name: "Sudeep Goenka",
      position: "CEO, Goenka Group",
      content: "“bankersklub give me a cnfidence I needed”",
      video:
        "https://api-bankers.basukalaiti.com/uploads/video-1740683257339.mp4",
    },
    {
      id: "5",
      name: "Sudeep Goenka",
      position: "CEO, Goenka Group",
      content: "“bankersklub give me a cnfidence I needed”",
      video:
        "https://api-bankers.basukalaiti.com/uploads/video-1740683257339.mp4",
    },
  ];

  return (
    <div>
      <div className={`${style.container}`}>
        <div ref={ref} className={style.carsouel_container}>
          {testimonial?.map((data, index) => (
            <TestimonialCard
              testimonial={data}
              innerRef={index === 0 ? refs : efs}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
