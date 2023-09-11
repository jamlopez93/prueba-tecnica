import getAllPosts from "../../../lib/getAllPosts";
import Link from "next/link";

export default async function postPage() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;
  const content = (
    <section>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      {posts.map((post: Post) => {
        return (
          <p key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </p>
        );
      })}
    </section>
  );
  return content;
}
