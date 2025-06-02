"use client";
import Capital from "@/components/capital";
import styles from "./detail.module.css";
import StatsCounter from "@/components/statsCounter";
import { useGetCapitalFundedByIdQuery } from "@/services/capital_funded.api";
import { useGetServiceByIdQuery } from "@/services/service.api";
import React, { useEffect, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import Partner from "@/components/partner";
import { useGetPartnersQuery } from "@/services/partner.api";
import FeeStructure from "@/components/fees";
import Slider from "@/components/sliders";
import HomeBlog from "@/components/blogCard/home";
import { useGetBlogsQuery } from "@/services/blog.api";
import CaseCard from "@/components/blogCard/caseCard";
import Timeline from "@/components/timeline";

const sections = ["why", "pricing", "cases", "start"];
const sectionNames = {
  why: "Why choose bankersklub",
  pricing: "Fee Structure",
  cases: "Testimonials",
  start: "Get Started",
};

export default function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params); // ✅ unwrap the Promise

  const { data } = useGetServiceByIdQuery(slug);
  const serviceDetail = data?.data || [];
  const [activeTab, setActiveTab] = useState("why");
  const [isSticky, setIsSticky] = useState(false);

  const { data: blog } = useGetBlogsQuery(undefined);

  const article = blog?.data || [];
  useEffect(() => {
    const tabOffset = document.getElementById("sticky-tabs")?.offsetTop || 0;

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= tabOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveTab(visible[0].target.id);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const statsData = [
    {
      target: 1000,
      label: "Total Capital Funded",
      prefix: "₹",
      suffix: " Cr+",
    },
    { target: 125, label: "Capital Funded", suffix: "+" },
    { target: 1500, label: "Capital Funded", suffix: "+" },
    { target: 1500, label: "Capital Funded", suffix: "+" },
  ];
  const special = [
    { icon: <BsGraphUpArrow />, title: "Raise Debt with Expert Advisory" },
    {
      icon: <LuHandshake />,
      title: "Hire your Banker and propel your business",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Faster turn around with Bankersklub",
    },
  ];
  const { data: capital } = useGetCapitalFundedByIdQuery("HOME") as unknown as {
    data: ICapitalFunded[];
  };
  const { data: partner, isLoading: isPartnerLoad } =
    useGetPartnersQuery(undefined);
  return (
    <div>
      <header className={styles.header}>
        <h1>
          {serviceDetail?.title?.substring(0, serviceDetail.title.indexOf(" "))}{" "}
          <br />{" "}
          {serviceDetail?.title?.substring(
            serviceDetail?.title?.indexOf(" "),
            serviceDetail?.title.length
          )}
        </h1>
        <p>{serviceDetail.description}</p>
        <button>Get Started Now</button>
        <StatsCounter color={"white"} stats={statsData} />
      </header>
      <Timeline />
      <div className={styles.special}>
        <div className={styles.special_head}>
          <h1>Raise funds effortlessly</h1>
          <button>Schedule a meeting</button>
        </div>
        <div className={styles.special_tail}>
          {special.map((data) => (
            <div key={data.title} className={styles.rediect_div}>
              {data.icon}
              <div>{data.title}</div>
            </div>
          ))}
        </div>
      </div>
      <main>
        {/* Sticky Tabs */}
        <nav
          id="sticky-tabs"
          className={`${styles.stickyTabs} ${isSticky ? styles.stuck : ""}`}
        >
          <ul className={styles.navList}>
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${styles.tabLink} ${
                    activeTab === id ? styles.active : ""
                  }`}
                >
                  {sectionNames[id as keyof typeof sectionNames]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <section id="why" className={styles.section}>
          <div className={styles.capital}>
            <div className={styles.left}>
              <h1>Why choose Bankersklub</h1>
              <p>{serviceDetail?.quotes}</p>
              <button>Get started now</button>
            </div>
            <div>
              {capital?.map((item: ICapitalFunded, index: number) => (
                <Capital key={index} index={index} data={item} />
              ))}
            </div>
          </div>
          {!isPartnerLoad && (
            <div className={styles.partner}>
              <Partner data={partner?.data} />
            </div>
          )}
        </section>
        <section id="pricing" className={styles.section}>
          <FeeStructure />
        </section>
        <section id="cases" className={styles.section}>
          <div className={styles.case_study}>
            <div>
              <h1>Customer Case studies</h1>
              <button>View full Case study</button>
            </div>
            <div>
              {article?.map((data: IBlog, index: number) => (
                <CaseCard key={index} data={data} />
              ))}
            </div>
          </div>
          <div className={styles.creator}>
            <div>
              <h1>
                Trusted by wealth <br />
                creators like you
              </h1>
              <button>Get Started Now</button>
            </div>
            <Slider />
          </div>
          <HomeBlog />
        </section>
        <section id="start" className={styles.section}>
          <div className={styles.start}>
            <h1>
              Let’s Build a Stronger
              <br /> Financial Future Together.
            </h1>
            <button>Get Started</button>
          </div>
        </section>
      </main>
    </div>
  );
}
