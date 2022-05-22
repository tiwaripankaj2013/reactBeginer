import React from "react";

export const Card = (props) => {
  return (
    <div className=" mt-5  bg-white border shadow-md rounded-lg border-slate-200/60">
      <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
        <h2 className="font-medium text-base mr-auto">{props.title}</h2>
        <div className=" text-sm w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0 text-gray-500">
          <label className="ml-0">
            {props.subTitle}
          </label>
        </div>
      </div>
      <div className="p-5">
      <div className="overflow-x-auto">
          {props.children}
      </div>
      </div>
    </div>
  );
};
