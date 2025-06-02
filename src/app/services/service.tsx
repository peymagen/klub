"use client";
import React from "react";
import style from "./Service.module.css";
import PageInfo from "@/components/pageInfo";
import ServiceCard from "@/components/service/card";
import { useGetServicesQuery } from "@/services/service.api";
import Div from "@/components/animation/Div";

export default function ServicePage() {
  const { data, isLoading } = useGetServicesQuery(undefined);

  const services = data?.data || [];

  if (!isLoading)
    return (
      <>
        <Div>
          <PageInfo page="SERVICE" position="middle" />
        </Div>
        <Div delay={0.2}>
          <div className={style.container}>
            <div className={style.flex_wrap}>
              {services?.map((data: IService, index: number) => (
                <Div key={index} delay={index * 0.5}>
                  <ServiceCard key={index} service={data} />
                </Div>
              ))}
            </div>
          </div>
        </Div>
      </>
    );
}
