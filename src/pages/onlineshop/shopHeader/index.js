import React from 'react';


 const ShopHeader = () => {
  return (
     <>
    <div className="border-t border-b border-gray-400">
       <select className="max-w-lg px-3 py-2 mx-auto block">
          <option>Supplies by Printer</option>
          <option>Hcl Technology</option>
          <option>Dell Technology</option>
          <option>Hp Technology</option>
       </select>
    </div>
    <div className="py-4 mx-auto text-center mt-6">
         <h3 className="text-purple-700 text-2xl">Printer, Copier, Fax & Supplies</h3>
         <p className="text-lg">Apply accoding to the result</p>

         <div className="flex">
            <div className="w-1/3">
            <label>Choose By Brand</label>
            <select className="max-w-lg px-3 py-2 mx-auto block">
               <option>Supplies by Printer</option>
               <option>Hcl Technology</option>
               <option>Dell Technology</option>
               <option>Hp Technology</option>
            </select>
            </div>
         </div>
    </div>
    </>
  )
}


export default ShopHeader;