import React from "react";
import styles from "./sector.module.css";
import Image from "next/image";

interface SectorCardProps {
  id: number;
  image: string;
  title: string;
  className?: string;
}

const SectorCard: React.FC<SectorCardProps> = ({
  id,
  image,
  title,
  className,
}) => {
  return (
    <div className={`${styles.card}  ${className ? styles[className] : ""}`}>
      <div className={styles.icon}>
        <Image
          key={id}
          src={process.env.NEXT_PUBLIC_BACKEND_API_URL + image}
          alt={image}
          width={40}
          height={40}
          priority
        />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SectorCard;
