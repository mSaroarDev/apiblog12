export default async function postDetails(postID) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${postID}`
  );
  const data = await res.json();

  return data.postDetails;
}
