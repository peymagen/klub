import { useRef } from "react";
import style from "./advisors.module.css";
import { useGetTeamsQuery } from "@/services/team.api";
import Card from "./card";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const Advisors = () => {
  const { data, isLoading } = useGetTeamsQuery(undefined);
  const teamData = !isLoading ? (data?.data as ITeam[]) : [];
  const ref = useRef<HTMLDivElement>(null);
  const refs = useRef<HTMLDivElement>(null);
  const efs = useRef<HTMLDivElement>(null);

  const btnpressprev = () => {
    console.log("Prev");
    const singleBox = refs.current;
    if (singleBox) {
      const styleBox = window.getComputedStyle(singleBox);
      if (ref.current) {
        ref.current.scrollLeft =
          ref.current.scrollLeft - parseInt(styleBox.width, 10);
      }
    }
  };

  const btnpressnext = () => {
    console.log("Next");
    const singleBox = refs.current;
    if (singleBox) {
      const styleBox = window.getComputedStyle(singleBox);
      if (ref.current) {
        ref.current.scrollLeft =
          ref.current.scrollLeft + parseInt(styleBox.width, 10);
      }
    }
  };
  return (
    <div className={style.section}>
      <div className={style.head}>
        <div>
          <h1>
            Meet our Specialist <br />
            Advisory
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <button className={style.meeting}>Schedule a meeting</button>
        </div>
      </div>
      <div className={`${style.container}`}>
        <div ref={ref} className={style.carsouel_container}>
          {teamData?.map((data, index) => (
            <Card key={index} innerRef={index === 0 ? refs : efs} team={data} />
          ))}
        </div>
      </div>
      <div className={style.arrow_box}>
        <button className={style.arrow_icon} onClick={btnpressprev}>
          <FaArrowLeft />
        </button>
        <button className={style.arrow_icon} onClick={btnpressnext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Advisors;
