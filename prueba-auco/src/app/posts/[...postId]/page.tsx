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
 // const [post, postComments] = await Promise.all([postData, postCommentsData]);
  const post = await postData;
  return (
    <>
    <h2>
        {post.title}
        <Suspense fallback={
            <p>Cargando...</p>
            }>
        <PostsComments promise={postCommentsData} />
        </Suspense>
    </h2>
    </>
  )
}
