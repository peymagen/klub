import Image from "next/image";
import styles from "./heroInfo.module.css";
export interface IHero {
  hero: IHome;
  bg: string;
}
export default function HeroInfo({ hero, bg }: IHero) {
  return (
    <div className={`${styles.container} ${styles[bg]}`}>
      <h1 className={styles.title}>{hero.title}</h1>
      <p className={styles.description}>{hero.description}</p>
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_API_URL + hero.image}
        height={50000}
        width={10000}
        alt="Hero Image"
        className={styles.image}
      />
    </div>
  );
}
