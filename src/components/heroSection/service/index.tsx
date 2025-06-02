"use client";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Styles from "./service.module.css";
export interface IHeroService {
  service: IService;
}
export default function Service({ service }: IHeroService) {
  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_API_URL ?? ""}${
            service.image
          }`}
          height={50}
          width={50}
          alt="Service Image"
          className="image"
        />
        <MdArrowOutward />
      </div>
      <div className={Styles.tail}>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
