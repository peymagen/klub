"use client";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Styles from "./service.module.css";
import { RefObject } from "react";
import Link from "next/link";

interface ServiceCardProps {
  service: IService;
  innerRef?: RefObject<HTMLDivElement>;
}

export default function Card({ service }: ServiceCardProps) {
  return (
    <div className={Styles.section}>
      <div className={Styles.head}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_API_URL ?? ""}${
            service.image
          }`}
          height={25}
          width={25}
          alt="Service Image"
          className="image"
        />
        <Link
          href={`/services/${service.title.replace(/ /g, "-").toLowerCase()}`}
        >
          <MdArrowOutward />
        </Link>
      </div>
      <div className={Styles.tail}>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
