import { useGetChoosesQuery } from "@/services/choose.api";
import style from "./choose.module.css";
import Card from "../choose/card";

const Choose = ({ type }: { type: string }) => {
  const { data: choose, isLoading } = useGetChoosesQuery(undefined);

  return (
    <div className={style.head}>
      <div className={style.title}>
        <h1>Why to choose Bankersklub over traditional method</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className={style[type]}>
        {!isLoading &&
          choose?.data?.map((item: IChoose, index: number) => (
            <Card key={index} data={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Choose;
