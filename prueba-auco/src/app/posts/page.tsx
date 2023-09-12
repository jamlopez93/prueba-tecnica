/* eslint-disable react/jsx-key */
import getAllPosts from "../../../lib/getAllPosts";
import Link from "next/link";
import { Suspense } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";


export default async function postPage() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;
  const content = (
    <section className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => {
          return (
            <Suspense fallback={<p>Cargando...</p>}>
              <Link
                href={`/posts/${post.id}`}
                className="bg-gray-100 rounded-card bg-light-grey rounded-lg border-mid-grey shadow-lg border p-5 "
              >
                <div>                
                  <h3 key={post.id}>{post.title}</h3>
                  <p>{post.body.split(" ").slice(0, 5).join(" ")}...</p>
                </div>
              </Link>
            </Suspense>
          );
        })}
      </div>
    </section>
  );
  return(
    <div>
      {content}
      <ScrollToTopButton /> 
    </div>
  );
}
