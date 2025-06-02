"use client";
import Image from "next/image";
import Styles from "./heroSection.module.css";
import { useGetServicesQuery } from "@/services/service.api";
import Service from "./service";
export interface IHero {
  hero: IHome;
}
const HeroSection = ({ hero }: IHero) => {
  const { data: service, isLoading } = useGetServicesQuery(undefined);
  const serviceData = Array.isArray(service?.data)
    ? (service.data.slice(0, 2) as IService[])
    : [];

  return (
    <div className={Styles.container}>
      <div className={Styles.section}>
        <div className={Styles.details}>
          <h1 className={Styles.title}>{hero.title}</h1>
          <div className={Styles.description}>
            <p>{hero.description}</p>
            <button className={Styles.button}>Get Started Now</button>
          </div>
          <div className={Styles.service}>
            {!isLoading &&
              serviceData.map((data) => (
                <Service key={data.id} service={data} />
              ))}
          </div>
        </div>
        <div className={Styles.image_box}>
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_API_URL + hero.image}
            height={700}
            width={600}
            alt="Hero Image"
            className="hero_image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
