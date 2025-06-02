"use client";
import styles from "./corporation.module.css";
import { useGetHomeByIdQuery } from "@/services/home.api";
import HeroInfo from "@/components/heroInfo";
import StatsCounter from "@/components/statsCounter";
import Choose from "@/components/choose";
import Sectors from "@/components/sector";
import FundingCalculator from "@/components/fundingCalculator";
import FeeStructure from "@/components/fees";
import Faq from "@/components/faq";
import Slider from "@/components/sliders";
import ApproachSection from "@/components/approachSection";

export default function CorporationPage() {
  const { data: homes, isLoading } = useGetHomeByIdQuery("CORPORATIONS");

  const heroData: IHome = !isLoading ? homes.data : null;
  console.log("heroData", heroData);
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
  return (
    <div>
      {!isLoading && <HeroInfo bg="corporations" hero={heroData} />}
      <StatsCounter stats={statsData} />
      <Choose type="other" />
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Why to choose Bankersklub over traditional method</h1>
          <p>{heroData?.content}</p>
          <button>Schedule a meeting</button>
        </div>
        <div className={styles.right}>
          <div>
            <h3>{heroData?.quotes.split("||")?.[0]}</h3>
            <p>{heroData?.quotes.split("||")?.[1]}</p>
          </div>
        </div>
      </div>
      <Sectors />
      <FundingCalculator />
      <FeeStructure />
      <ApproachSection />
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
      <Faq page="ABOUT" />
    </div>
  );
}
