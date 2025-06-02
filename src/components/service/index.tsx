import { useRef } from "react";
import Card from "./card";
import { useGetServicesQuery } from "@/services/service.api";
import style from "./service.module.css";

const Service = () => {
  const { data: service, isLoading } = useGetServicesQuery(undefined);
  const serviceData = !isLoading ? (service?.data as IService[]) : [];
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const refs = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const efs = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  if (!isLoading)
    return (
      <div className={style.body}>
        <div className={style.title}>
          <h1>Our Services</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className={`${style.container}`}>
          <div ref={ref} className={style.carsouel_container}>
            {serviceData?.map((data, index) => (
              <Card
                key={index}
                innerRef={index === 0 ? refs : efs}
                service={data}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Service;
