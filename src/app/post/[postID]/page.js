import postDetails from "@/libs/postDetails";

export default async function PostDetails({ params }) {
  const postId = params.postID;
  const post = await postDetails(postId);

  return (
    <>
      <div className="bg-gray-100">
        <main className="shadow-md p-6 rounded-md">
          <h1 className="text-lg">{post.title}</h1>
        </main>
      </div>
    </>
  );
}
