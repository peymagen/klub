import Image from "next/image";
import style from "./advisors.module.css";

interface TeamCardProps {
  team: ITeam;
  innerRef: React.RefObject<HTMLDivElement | null>;
}

const Card = ({ team, innerRef }: TeamCardProps) => {
  return (
    <div ref={innerRef} className={style.card}>
      <div className={style.header}>
        <Image
          key={team?.id}
          src={process.env.NEXT_PUBLIC_BACKEND_API_URL + team?.image}
          alt={team?.image}
          width={100}
          height={120}
          priority
        />
        <h3>{team.name}</h3>
        <p>@{team.position}</p>
      </div>
      <div className={style.tailer}>
        <p>Raised</p>
        <p>₹10 Cr+</p>
      </div>
    </div>
  );
};

export default Card;
