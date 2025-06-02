import styles from "./homeBlog.module.css";
import BlogCard from ".";
import { useGetBlogsQuery } from "@/services/blog.api";

export default function HomeBlog() {
  const { data: blog, isLoading } = useGetBlogsQuery(undefined);

  const article = blog?.data || [];

  if (!isLoading)
    return (
      <div className={styles.blog_container}>
        <div className={styles.head}>
          <div>
            <h1>Read our blogs</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <button className={styles.meeting}>Read all articles</button>
          </div>
        </div>
        <div className={`${styles.blog_box}`}>
          <div className={styles.blog_head}>
            <BlogCard data={article[0]} />
            <BlogCard data={article[1]} />
          </div>
          <div className={styles.blog_tail}>
            {article?.map((data: IBlog, index: number) => (
              <BlogCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    );
}
