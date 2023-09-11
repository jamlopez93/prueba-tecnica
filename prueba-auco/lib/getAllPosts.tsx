
export default async function getAllPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) throw new Error("Hubo un error al obtener los posts");

  return res.json();
}
