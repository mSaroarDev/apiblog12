import Image from "next/image";

export default async function PostDetails({ post }) {
  const { title, img, content, created_at } = post;
  const date = new Date(created_at);
  const time = date.toUTCString();
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="my-5">Posted On: {time}</p>
      <Image src={img} alt={title} width={1000} height={500} />
      <div className="content p-5">{content}</div>
    </>
  );
}
