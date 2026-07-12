import { Post } from "@/types/post";

const BASE_URL =
  "https://6a4a6035edfa6a2b5fd7cc24.mockapi.io/posts";

// Get all posts
export async function getPosts(): Promise<Post[]> {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });
  return res.json();
}

// Get single post
export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "no-store",
  });
  return res.json();
}