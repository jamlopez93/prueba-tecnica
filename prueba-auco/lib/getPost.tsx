export default async function getPost(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) throw new Error("Hubo un error al obtener el post");
  return res.json();
}
