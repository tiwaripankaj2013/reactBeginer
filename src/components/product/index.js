import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../../pages/onlineshop/cardItem";
import { fetchProducts } from "../../features/store/productSlice";
import { add } from "../../features/store/cartSlice";
import { STATUSES } from "../../features/store/productSlice";


const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loadin..</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <div className=" container mx-auto">
      <p>index</p>
      <div className="flex flex-wrap"> 
         {products.map((product) => (
          <CardItem
            key={product.id}
            img={product.image}
            // id={product.id}
            name={product.title}
            price={product.price}
            event={handleAdd(product)}
          />
        ))} 
      </div>
    </div>
  );
};

export default Products;
