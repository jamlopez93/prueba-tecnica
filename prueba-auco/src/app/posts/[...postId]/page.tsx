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
    <>
      <div>
        <h3>{post.title} </h3>
        <p>{post.body}</p>
      </div>
      <Suspense fallback={<p>Cargando...</p>}>
        <PostsComments promise={postCommentsData} />
      </Suspense>
    </>
  );
}
