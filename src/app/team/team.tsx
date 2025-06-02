"use client";

import Styles from "./team.module.css";
import Image from "next/image";
import { useMemo } from "react";
import { FaLinkedin } from "react-icons/fa6";
// import Middle from "@/component/middle";
import PageInfo from "@/components/pageInfo";
import { useGetTeamsQuery } from "@/services/team.api";

export default function TeamPage() {
  const { data, isLoading } = useGetTeamsQuery(undefined);
  const team = useMemo(() => data?.data || [], [data]);

  const infoAction = [
    {
      title: "Get started now",
      to: "/services",
      class: "primary_banker",
      outline: false,
    },
  ];
  if (!isLoading)
    return (
      <>
        <PageInfo page="TEAM" position="middle" action={infoAction} />
        <div className={Styles.founders_section}>
          <h2>
            Meet our <br /> Founders
          </h2>

          <div className={Styles.founders_cards}>
            {team?.length > 0 &&
              team?.map((item: ITeam, index: number) => {
                return (
                  <div key={index} className={Styles.founder_card}>
                    <Image
                      className={Styles.founder_image}
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_API_URL + item?.image
                      }
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <h3>{item.name}</h3>
                    <p className={Styles.founder_role}>{item.position}</p>
                    <a href="#" className={Styles.linkedin_icon}>
                      <FaLinkedin />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={Styles.founders_section}>
          <h2>
            Meet our <br /> Leadership <br /> Team
          </h2>

          <div className={Styles.founders_cards}>
            {team?.length > 0 &&
              team?.map((item: ITeam, index: number) => {
                return (
                  <div key={index} className={Styles.founder_card}>
                    <Image
                      className={Styles.founder_image}
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_API_URL + item?.image
                      }
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <h3>{item.name}</h3>
                    <p className={Styles.founder_role}>{item.position}</p>
                    <a href="#" className={Styles.linkedin_icon}>
                      <FaLinkedin />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={Styles.founders_section}>
          <h2>
            Meet our <br /> Advisory <br /> Board
          </h2>

          <div className={Styles.founders_cards}>
            {team?.length > 0 &&
              team?.map((item: ITeam, index: number) => {
                return (
                  <div key={index} className={Styles.founder_card}>
                    <Image
                      className={Styles.founder_image}
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_API_URL + item?.image
                      }
                      alt={item.name}
                      width={200}
                      height={200}
                    />
                    <h3>{item.name}</h3>
                    <p className={Styles.founder_role}>{item.position}</p>
                    <a href="#" className={Styles.linkedin_icon}>
                      <FaLinkedin />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
}
