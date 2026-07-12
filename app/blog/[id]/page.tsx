import { getPost } from "@/lib/api";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { id } = await params;

  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">
        {post.title}
      </h1>

      <p className="text-gray-500 mb-6">
        {post.author} • {post.category}
      </p>

      <div className="text-lg leading-8 whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
}