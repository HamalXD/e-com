import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { image, title, price, description } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26p] font-medium mb-2 max-w-[450px] mx-auto lg:mx">
              {title}
            </h1>
            <div className="text-xl font-medium mb-6">${price}</div>
            <p className="mb-8 ">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white px-4 py-2 mt-6"
            >
              Add To cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
