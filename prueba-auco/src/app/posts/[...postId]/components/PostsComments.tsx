type Props = {
  promise: Promise<Comment[]>;
};
type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};
export default async function PostsComments({ promise }: Props) {
  const postComments = await promise;
  const content = postComments.map((comment) => {
    return (
      <article key={comment.id}>
        <h3>{comment.name}</h3>
        <h4>{comment.email}</h4>
        <p>{comment.body}</p>
      </article>
    );
  });
  return content;
}
