"use client";
import Capital from "@/components/capital";
import HeroSection from "@/components/heroSection";
import TextHighligter from "@/components/textHighlighter";
import VideoTemplate from "@/components/videoTemplate";
import { useGetCapitalFundedByIdQuery } from "@/services/capital_funded.api";
import { useGetHomeByIdQuery } from "@/services/home.api";
import Style from "./page.module.css";
import { useGetPartnersQuery } from "@/services/partner.api";
import Partner from "@/components/partner";
import Service from "@/components/service";
import Choose from "@/components/choose";
import FundingCalculator from "@/components/fundingCalculator";
import FeeStructure from "@/components/fees";
import Advisors from "@/components/advisors";
import HomeBlog from "@/components/blogCard/home";
import Sectors from "@/components/sector";

export default function Home() {
  const { data: homes, isLoading } = useGetHomeByIdQuery("HOME");
  const { data: capital } = useGetCapitalFundedByIdQuery("HOME") as unknown as {
    data: { data: ICapitalFunded[] };
  };
  const { data: partner, isLoading: isPartnerLoad } =
    useGetPartnersQuery(undefined);
  const heroData: IHome = !isLoading ? homes.data : null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <HeroSection hero={heroData} />
      <TextHighligter text={heroData.quotes} />
      <VideoTemplate
        data={process.env.NEXT_PUBLIC_BACKEND_API_URL + heroData.video}
      />
      <div className={Style.capital}>
        <p>{heroData.content}</p>
        <div>
          {capital?.data?.map((item: ICapitalFunded, index: number) => (
            <Capital key={index} index={index} data={item} />
          ))}
        </div>
      </div>
      {!isPartnerLoad && (
        <div className={Style.partner}>
          <Partner data={partner?.data} />
        </div>
      )}
      <Service />
      <Choose type="body" />
      <FundingCalculator />
      <FeeStructure />
      <Advisors />
      <Sectors />
      <HomeBlog />
    </>
  );
}
