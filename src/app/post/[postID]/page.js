import postDetails from "@/libs/postDetails";
import Image from "next/image";

export default async function PostDetails({ params }) {
  const postId = params.postID;
  const post = await postDetails(postId);

  const { title, img, content, created_at } = post;
  const date = new Date(created_at);
  const time = date.toUTCString();

  return (
    <>
      <div className="bg-white mt-5">
        <main className="p-6 rounded-md">
          <div className="flex justify-between items-start gap-6">
            <div className="w-2/3 shadow-md p-6 rounded-sm">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="my-5">Posted On: {time}</p>
              <Image src={img} alt={title} width={1000} height={500} />
              <div className="content p-5">{content}</div>
            </div>
            <div className="w-1/3 shadow-md p-6 rounded-sm">sidebar</div>
          </div>
        </main>
      </div>
    </>
  );
}
