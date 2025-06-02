import React from "react";
import styles from "./sector.module.css";
import SectorCard from "./sectorCard";

import { useGetSectorsQuery } from "@/services/sector.api";

const Sectors: React.FC = () => {
  const { data: sector, isLoading: isSectorLoad } =
    useGetSectorsQuery(undefined);
  const sectors: ISector[] = !isSectorLoad ? sector.data : [];
  console.log(sectors);
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>
          We serve to all sector
          <br />
          <span>Profits You Make</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s...
        </p>
        <button className={styles.cta}>Get started now</button>
      </div>
      {!isSectorLoad && (
        <div className={styles.grid}>
          <div className={styles.grid_block}>
            {sectors.slice(0, 3).map((sector, i) => (
              <SectorCard
                className={"grid_column_" + (i + 4)}
                key={i}
                {...sector}
                id={typeof sector.id === "number" ? sector.id : i}
              />
            ))}
          </div>
          <div className={styles.grid_block}>
            {sectors.slice(3, 6).map((sector, i) => (
              <SectorCard
                className={"grid_column_" + (i + 1)}
                key={i + 3}
                {...sector}
                id={typeof sector.id === "number" ? sector.id : i + 3}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sectors;
