import React from "react";
import Image from "next/image";

const Product = () => {
  const tempImg =
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl mb-6">
        <figure>
          <Image src={tempImg} alt="Shoes" width={350} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
