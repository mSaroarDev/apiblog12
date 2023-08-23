import React from "react";
import Image from "next/image";
import Link from "next/link";

const Product = ({ post }) => {
  const { img, title, short, id } = post;
  const shorttext = short.slice(0, 100);

  return (
    <div>
      <Link href={`/single-blog/${id}`}>
        <div className="card w-80 bg-base-100 shadow-xl mb-6">
          <figure>
            <Image src={img} alt="Shoes" width={350} height={300} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{shorttext}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
