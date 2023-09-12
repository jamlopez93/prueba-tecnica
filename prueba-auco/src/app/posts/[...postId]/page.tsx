import getPost from "../../../../lib/getPost";
import getPostComments from "../../../../lib/getPostComments";
import { Suspense } from "react";
import PostsComments from "./components/PostsComments";
type Params = {
  params: {
    postId: string;
  };
};

export default async function singlePost({ params: { postId } }: Params) {
  const postData: Promise<Post> = getPost(postId);
  const postCommentsData: Promise<Comment[]> = getPostComments(postId);
  const post = await postData;
  return (
    <article className="max-w-2xl mx-auto p-6">
      <div  >
        <h3 className="my-4 text-center text-2xl font-bold text-[#041840]   lg:text-4xl">{post.title} </h3>
        <p className="my-8">{post.body}</p>
      </div>
      <Suspense fallback={<p>Cargando...</p>}>
        <PostsComments promise={postCommentsData} />
      </Suspense>
    </article>
  );
}
