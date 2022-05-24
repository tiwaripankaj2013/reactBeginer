import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../../pages/onlineshop/cardItem";
import { fetchProducts } from "../../store/productSlice";
import { add } from "../../store/cartSlice";
import { STATUSES } from "../../store/productSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
    // window.alert(product);
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loadin..</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  // console.log(products);
  return (
    <div className=" container mx-auto">
      <div className="flex flex-wrap mt-5"> 
         {products.map((product) => (
          <div className="w-1/2 md:w-1/4  px-2 mb-4" key={product.id}>
          <div className=" bg-white rounded mb-4 px-1 py-4 border border-gray-100 shadow-sm h-full">
            <div className="dress-card-head">
              <div className=" max-w-[10rem] mx-auto">
                <img className="w-full" src={product.image} alt={product.title} />
              </div>
              <div className="px-3 mb-6">
                {/* <p className="text-base text-gray-700 mb-4">
                  item <span>{props.id}</span>
                </p> */}
                <Link
                  to="#acd"
                  className=" text-primary leading-5 text-lg  font-bold block mb-8"
                >
                  {product.category}
                </Link>
                <p className=" text-gray-700 text-lg mb-6">
                  <span className="dress-card-price">Price : {product.price}</span>
                </p>
                <div className="flex items-center">
                  
                  <button
                    className="px-4 py-2 rounded-lg cursor-pointer outline-none border-none text-white bg-primary"
                    onClick={() => handleAdd(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))} 
      </div>
    </div>
  );
};

export default Products;
