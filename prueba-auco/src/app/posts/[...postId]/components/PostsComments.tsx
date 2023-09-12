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
      <div className="bg-white g-gray-100 rounded-card bg-light-grey rounded-lg border-mid-grey shadow-lg border p-5 my-4" key={comment.id}>
        <h4 className="mb-1 font-semibold">{comment.email}</h4>
        <p className="my-2">{comment.body}</p>
      </div>
    );
  });
  return content;
}
