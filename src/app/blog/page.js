// import Product from "@/components/Product";
import Footer from "@/components/Footer";
import Product from "@/components/Product";
import fetchProduct from "@/libs/fecthProduct";
import React from "react";

export default async function Blog() {
  const posts = await fetchProduct();

  return (
    <div>
      <main>
        <h1 className="mb-6 mt-6">Blog Posts</h1>
        <div className="blogs flex flex-wrap justify-between">
          {posts.map((post, index) => {
            return <Product key={index} post={post} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
