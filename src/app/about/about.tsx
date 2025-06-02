"use client";

import { useGetAboutByIdQuery } from "@/services/about.api";
import style from "./about.module.css";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
// import Middle from "@/component/middle";
// import Journey from "@/component/journey";
import Faq from "@/components/faq";
import PageInfo from "@/components/pageInfo";
import Div from "@/components/animation/Div";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";

const special = [
  { icon: <BsGraphUpArrow />, title: "Raise Debt with Expert Advisory" },
  { icon: <LuHandshake />, title: "Hire your Banker and propel your business" },
  {
    icon: <AiOutlineThunderbolt />,
    title: "Faster turn around with Bankersklub",
  },
];

const redirect = [
  { icon: <HiOutlineBuildingOffice2 />, link: "/", title: "Company" },
  { icon: <CiSettings />, link: "/", title: "Services" },
  { icon: <RiGroupLine />, link: "/", title: "Team" },
];

const rEle = (
  <Image
    src="/banker_full_image.png"
    alt="banker_full_image"
    height={500}
    width={500}
  />
);
export default function About() {
  const { data: companyInfos, isLoading: isLoad } = useGetAboutByIdQuery(1);

  const storedCompanyInfos = useMemo(
    () => companyInfos?.data || [],
    [companyInfos]
  );

  const detail = useMemo(() => {
    if (!isLoad) {
      const newDetail: { [key: string]: string } = {};
      const detail1 = JSON.parse(storedCompanyInfos?.title1 || "{}");
      const detail2 = JSON.parse(storedCompanyInfos?.title2 || "{}");
      const detail3 = JSON.parse(storedCompanyInfos?.title3 || "{}");

      newDetail[Object.keys(detail1)[0] || ""] =
        (Object.values(detail1)[0] as string) || "";
      newDetail[Object.keys(detail2)[0] || ""] =
        (Object.values(detail2)[0] as string) || "";
      newDetail[Object.keys(detail3)[0] || ""] =
        (Object.values(detail3)[0] as string) || "";

      return newDetail;
    }
    return {};
  }, [isLoad, storedCompanyInfos]);

  const [, setDis] = useState<keyof typeof detail>(Object.keys(detail)?.[0]);

  // Set default value for `dis` when `detail` updates
  useEffect(() => {
    if (Object.keys(detail).length > 0) {
      setDis(Object.keys(detail)[0] as keyof typeof detail);
    }
  }, [detail]);
  const infoAction = [
    {
      title: "Get started now",
      to: "/services",
      class: "primary",
      outline: false,
    },
  ];
  if (!isLoad)
    return (
      <>
        <Div>
          <PageInfo
            page="ABOUT"
            position="start"
            action={infoAction}
            rightElement={rEle}
          />
        </Div>

        <div className={style.overview_box}>
          <Div direction="left" delay={2}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_API_URL +
                storedCompanyInfos?.image
              }
              alt="Company"
              width={500}
              height={600}
              unoptimized={true}
            />
          </Div>

          <div>
            <Div direction="top" delay={2.5}>
              <h2 className={style.overview_head}>Our Company Overview</h2>
            </Div>
            <Div direction="right" delay={3}>
              <p>{storedCompanyInfos?.description}</p>
            </Div>

            <Div direction="bottom" delay={3.0}>
              <div className={style.overview_btn_box}>
                {redirect.map((data) => (
                  <div key={data.title} className={style.rediect_div}>
                    {data.icon}
                    <div>
                      {data.title}
                      <MdArrowOutward />
                    </div>
                  </div>
                ))}
              </div>
            </Div>
          </div>
        </div>
        <div className={style.overview_content}>
          <div>
            <h1>Core and Values</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <div>
              <h1>Mission</h1>
              <p>
                {
                  "Our mission is to bridge the experience and expertise gap in the financial sector. We enable retired bankers to impart their invaluable insights, thus empowering corporations to navigate through complex financial terrains and embrace opportunities for growth and development."
                }
              </p>
            </div>
            <div>
              <h1>Vision</h1>
              <p>
                Our vision is to nurture a global interconnected ecosystem where
                retired and seasoned banking professionals collaborate
                seamlessly with corporations, leveraging their expertise to
                shape business strategies, foster growth, and drive financial
                success
              </p>
            </div>
          </div>
        </div>
        <div className={style.gallery_content}>
          <div className={style.gallery_head}>
            <h1>Financing those who change the world</h1>
            <button>Schedule a meeting</button>
          </div>
          <div className={style.gallery}>
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
            <Image
              src="/banker_full_image.png"
              alt="banker_full_image"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className={style.special}>
          <div className={style.special_head}>
            <h1>What we do special</h1>
            <button>Schedule a meeting</button>
          </div>
          <div className={style.special_tail}>
            {special.map((data) => (
              <div key={data.title} className={style.rediect_div}>
                {data.icon}
                <div>{data.title}</div>
              </div>
            ))}
          </div>
        </div>
        <Div direction="bottom" delay={0.5}>
          <Faq page="ABOUT" />
        </Div>
      </>
    );
}
