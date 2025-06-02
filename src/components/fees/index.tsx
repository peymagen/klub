import { useGetFundSchemesQuery } from "@/services/fundScheme.api";
import Image from "next/image";
import style from "./fees.module.css";

const FeeStructure = () => {
  const { data: scheme, isLoading } = useGetFundSchemesQuery(undefined);
  return (
    <div className={style.container}>
      <div className={style.left_section}>
        <h1>Fee Structures That Work for You!</h1>
        <div className={style.fees}>
          {!isLoading &&
            scheme?.data?.map((item: IFundScheme, index: number) => (
              <div key={index}>
                <p>You raise fund upto</p>
                <h2>
                  ₹
                  {item.max !== "-"
                    ? item.min.replace("Cr", "") + "- " + item.max
                    : item.min}
                </h2>
                <p className={style.active}>₹{item.profit}</p>
                <p>Our fixed success fees</p>
              </div>
            ))}
        </div>

        <button>Schedule a meeting</button>
      </div>
      <div className={style.right_section}>
        <h3>Bankersklub Fees structure</h3>
        <p>
          Bankersklub charges upto 10% of the profits as fees for ERS strategy.
        </p>
        <p>We charge fees on same profit only once</p>
        <Image
          src="/fees_structure.svg"
          alt="Fees Structure"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FeeStructure;
