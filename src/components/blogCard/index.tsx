// import useRelativeTime from "@/hooks/useRelativeTime";
import React from "react";
import style from "./Blogcard.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function BlogCard({ data }: { data: IBlog }) {
  const routes = useRouter();
  const path = usePathname();
  console.log(path);
  return (
    <div
      className={style.blog_box}
      onClick={() =>
        routes.push(
          path === "/blog"
            ? `/blog/${data.title.replace(/ /g, "-")}`
            : data.title.replace(/ /g, "-")
        )
      }
    >
      <Image
        className={style.img}
        src={process.env.NEXT_PUBLIC_BACKEND_API_URL + data.image}
        alt={data.title}
        height={1000}
        width={1000}
      />
      <b>{data.title}</b>
      <p>{data.description}</p>
    </div>
  );
}
