import Style from "./capital.module.css";
const Capital = ({ index, data }: { index: number; data: ICapitalFunded }) => {
  console.log(index, "key");
  return (
    <div className={Style.capital}>
      <h1>
        ₹{data.amount}
        {index === 0 ? " Cr+" : "+"}
      </h1>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Capital;
