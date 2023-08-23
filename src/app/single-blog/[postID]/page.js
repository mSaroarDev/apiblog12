import postDetails from "@/libs/postDetails";
import PostContent from "../../../components/PostContent.jsx";
import Footer from "@/components/Footer.jsx";

export default async function PostDetails({ params }) {
  const postId = params.postID;
  const post = await postDetails(postId);

  return (
    <>
      <div className="bg-white mt-5">
        <main className="p-6 rounded-md">
          <div className="flex justify-between items-start gap-6">
            <div className="w-2/3 shadow-md p-6 rounded-sm">
              {post === null ? (
                <p>
                  This Blog content is empty from API. Try First 4 blogs only.
                </p>
              ) : (
                <PostContent post={post} />
              )}
            </div>
            <div className="w-1/3 shadow-md p-6 rounded-sm">sidebar</div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
