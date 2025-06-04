export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Unable to featch posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`,
  );

  if (!response.ok) throw new Error("Unable to featch posts.");

  return response.json();
};

export const getPoster = async ({ params }: any) => {
  const id = params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const poster = await res.json();

  return { poster, id };
};
