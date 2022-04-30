import React from 'react';
import { Link } from "react-router-dom";

 const CardItem = (props) => {
  return (
   <div className="w-1/2 md:w-1/4 px-2 mb-4">
            <div className=" bg-white rounded mb-4 px-1 border border-gray-100 shadow-sm h-full">
              <div className="dress-card-head">
                <div className="max-w-xs mx-auto">
                  <img
                    className="w-full"
                    src={props.img}
                    alt="product"
                  />
                </div>
                <div className="px-3 mb-6">
                  <p className="text-base text-gray-700 mb-4">
                    item <span>{props.id}</span>
                  </p>
                  <Link
                    to="#acd"
                    className=" text-primary leading-5 text-lg  font-bold block mb-8"
                  >
                    {props.name}
                  </Link>
                  <p className=" text-gray-700 text-lg mb-6">
                    <span className="dress-card-price">{props.price} &ensp;</span>
                  </p>
                  <div className="flex items-center">
                    <div className="text-right text-gray-800">
                      QTY{" "}
                      <input
                        type="number"
                        min="0"
                        max="1000"
                        className="px-1 mx-1 text-center w-[2.5rem] border border-gray-700 mr-2 rounded bg-transparent"
                      />
                    </div>
                    <button className="px-4 py-2 rounded-lg cursor-pointer outline-none border-none text-white bg-primary">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
export default CardItem;