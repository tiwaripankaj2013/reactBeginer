import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
        <div className=" container px-6">
            <p>Cart list</p>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 border border-gray-700 rounded shadow-lg py-2 flex items-center mb-4 px-3"
            >
              <img
                className=" max-w-[8rem] rounded-md"
                src={product.image}
                alt=""
              />
              <div className=" px-4">
                <h5 className="mb-2">{product.title}</h5>
                <h5>{product.price}</h5>
              </div>
              <div>
                <button
                  className=" bg-red-800 rounded text-sm inline-flex text-white px-3 py-1"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
  );
};
export default Cart;
