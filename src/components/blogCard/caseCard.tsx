import Image from "next/image";
import style from "./caseCard.module.css";
export default function CaseCard({ data }: { data: IBlog }) {
  return (
    <div className={style.box}>
      <div>
        <b>{data.title}</b>
        <p>{data.description}</p>
      </div>
      <Image
        className={style.img}
        src={process.env.NEXT_PUBLIC_BACKEND_API_URL + data.image}
        alt={data.title}
        height={1000}
        width={1000}
      />
    </div>
  );
}
