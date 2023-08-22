export default async function fetchProduct() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
  const data = res.json();

  return data;
}
