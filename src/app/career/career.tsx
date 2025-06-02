"use client";
import { useGetJobsQuery } from "@/services/job.api";
import style from "./carrer.module.css";
import PageInfo from "@/components/pageInfo";
import { useGetJoinsQuery } from "@/services/join.api";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import Button from "@/components/animation/Button";
import Div from "@/components/animation/Div";
import RecruitmentProcess from "@/components/recruitmentProcess";

export default function CarrerPage() {
  const { data: join, isLoading } = useGetJoinsQuery(undefined);
  const comapny = join?.data || [];

  const { data: jobList, isLoading: isLoad } = useGetJobsQuery(undefined);
  const job = jobList?.data;

  const [jobDescription, setJobDescription] = useState<number | null>(null);

  const infoAction = [
    { title: "Apply Here", to: "#join", class: "secondary", outline: false },
  ];
  if (!isLoading && !isLoad)
    return (
      <>
        <Div>
          <PageInfo page="CAREER" position="middle" action={infoAction} />
        </Div>
        <Div direction="bottom" delay={1.5}>
          <div id="culture" className={style.content}>
            <Div direction="left">
              <div className={style.description}>
                <b>BENEFITS</b>
                <h2>Why you Should Join Our Awesome Team</h2>
                <p>
                  we want to feel like home when you are working at JMC(Japan
                  Marketing & Consultancy Limited) & for that we have curated a
                  great set of benefits for you.It all starts with the free
                  lunch!
                </p>
              </div>
            </Div>
            <div className={style.content_element}>
              {comapny?.map((data: IJoin, i: number) => {
                return (
                  <Div key={data.id} direction="right" delay={i * 0.5}>
                    <div>
                      <div className={style.icon_content}>
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_API_URL + data?.icon
                          }
                          width={70}
                          height={70}
                          alt={data.title}
                        />
                      </div>
                      <p>
                        <b>{data?.title}</b>
                      </p>
                      <p>{data?.description}</p>
                    </div>
                  </Div>
                );
              })}
            </div>
          </div>
        </Div>
        <Div>
          <div id="join" className={style.blue_bg}>
            <div className={style.container}>
              <b>Come Join Us</b>
              <h1>Career Openings</h1>
              <p>
                We’re always looking for creative, talented self-starters to
                join the Peymagen Informatics and Automation family. Check out
                our open roles below and fill out an application.
              </p>
              <div className={style.job_container}>
                {job?.map((d: IJob, i: number) => {
                  return (
                    <Div key={i} delay={0.2 * i}>
                      <div className={style.wrap}>
                        <div
                          onClick={() =>
                            jobDescription === i
                              ? setJobDescription(null)
                              : setJobDescription(i)
                          }
                          className={style.job_box}
                        >
                          <b>{d?.title}</b>
                          <div>
                            <p className={style.silent}>Experience</p>
                            <p>{d?.experience}</p>
                          </div>
                          <div>
                            <p className={style.silent}>Deadline</p>
                            <p>{d?.end}</p>
                          </div>
                          <div>
                            {jobDescription === i ? (
                              <IoIosArrowDropdown />
                            ) : (
                              <IoIosArrowDropright />
                            )}
                          </div>
                        </div>
                        {jobDescription === i && (
                          <div className={style.job_box_description}>
                            <p className={style.job_description}>
                              {d.description}
                            </p>

                            <Button
                              onClick={() => console.log("click")}
                              className="secondary"
                            >
                              Apply Here
                            </Button>
                          </div>
                        )}
                      </div>
                    </Div>
                  );
                })}
              </div>
            </div>
          </div>
        </Div>
        <Div>
          <RecruitmentProcess />
        </Div>
      </>
    );
}
