import Image from "next/image";
import style from "./choose.module.css";
interface IChooseProps {
  data: IChoose;
  index: number;
}

const Card = ({ data, index }: IChooseProps) => {
  return (
    <div className={`${style["content_" + index]}`}>
      <div>
        <h1 className={style.card_title}>{data.title}</h1>
        <p className={style.description}>{data.description}</p>
      </div>
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_API_URL + data.image}
        height={300}
        width={600}
        alt="Choose Image"
        className={style.img}
      />
    </div>
  );
};

export default Card;
