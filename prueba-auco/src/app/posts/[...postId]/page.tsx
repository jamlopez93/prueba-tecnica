"use client";
import { motion, AnimatePresence } from "framer-motion";
import getPost from "../../../../lib/getPost";
import getPostComments from "../../../../lib/getPostComments";
import { Suspense } from "react";
import PostsComments from "./components/PostsComments";
import Link from "next/link";
type Params = {
  params: {
    postId: string;
  };
};
type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};
export default async function singlePost({ params: { postId } }: Params) {
  const postData: Promise<Post> = getPost(postId);
  const postCommentsData: Promise<Comment[]> = getPostComments(postId);
  const post = await postData;
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <article className="max-w-2xl mx-auto p-6 pb-20">
          <div>
            <h3 className="my-4 text-center text-2xl font-bold text-[#041840]   lg:text-4xl">
              {post.title}{" "}
            </h3>
            <p className="my-8">{post.body}</p>
          </div>
          <Suspense fallback={<p>Cargando...</p>}>
            <PostsComments promise={postCommentsData} />
          </Suspense>
        <Link href="/posts"> <button className="text-white cursor-pointer hover:bg-blue-900 transition-colors g-gray-100 rounded-card bg-light-grey rounded-lg border-mid-grey shadow-lg border p-5 my-4">Volver</button></Link> 
        </article>

        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
