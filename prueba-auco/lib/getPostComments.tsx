export default async function getPostComments(postId: string) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!res.ok) throw new Error("Hubo un error al obtener el post");
    return res.json();
  }
  