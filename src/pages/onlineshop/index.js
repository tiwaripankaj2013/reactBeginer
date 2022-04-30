import React from 'react';
import CardItem from './cardItem';
import ShopHeader from './shopHeader';
import {ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import shopData from  './data';
import { SelectWithLabel } from '../../component/ui/select';
 const OnlineShop = () => {
  const {brand,products} = shopData();
  
  return (
    <>
       <ShopHeader />
       <div className="mx-auto max-w-7xl w-full">
      <div className="flex flex-wrap justify-between max-w-3xl mx-auto w-full">
        <div className="w-1/2 sm:w-auto">
          <SelectWithLabel label="select Brand" data={brand} />
        </div>
        <div className="w-1/2 sm:w-auto">
        <SelectWithLabel label="Choose Brand" data={brand} />
          
        </div>
        <div className="w-1/2 sm:w-auto">
        <SelectWithLabel label="Choose Brand" data={brand} />
        </div>
      </div>
      
        <hr className="border-b border-gray-500 mx-2" />
        <div className="flex justify-between mb-6 mx-2">
          <div className="w-2/3 sm:w-1/3 mt-4 mb-2">
            <input
              type="serach"
              placeholder="search by product name or item number"
              className="px-3 py-2 rounded border-primary outline-none text-primary my-1 border-2 w-full max-w-sm"
            />
          </div>
          <div className="max-w-[10rem] mt-4 mb-2">
            <ul className="inline-flex justify-between text-right items-center">
              <li className>
                <button className="px-2 text-primary text-base text-center rounded-md border border-primary">
                  <ChevronLeftIcon className="w-6 h-6"/>
                </button>
              </li>
              <li>
                <p className="block text-center px-2 text-sm text-gray-800">
                  <span>2</span>pages
                </p>
              </li>
              <li>
              <button className="px-2 text-primary text-base text-center rounded-md border border-primary">
                  <ChevronRightIcon className="w-6 h-6"/>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap">
          {
            products.map((item) => (
              <CardItem key={item.id} img={item.img} id={item.id} name={item.name} price={item.cost}/>
            ))
          }
          
        </div>
        <div className="max-w-[15rem] mt-4 mb-8 text-right float-right">
            <ul className="inline-flex justify-between text-right items-center">
              <li className>
                <button className="px-2 text-primary text-base text-center rounded-md border border-primary">
                  <ChevronLeftIcon className="w-6 h-6"/>
                </button>
              </li>
              <li>
                <p className="block text-center px-2 text-sm text-gray-800">
                 Page <span>1</span>of <span>36</span>
                </p>
              </li>
              <li>
              <button className="px-2 text-primary text-base text-center rounded-md border border-primary">
                  <ChevronRightIcon className="w-6 h-6"/>
                </button>
              </li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default OnlineShop ;