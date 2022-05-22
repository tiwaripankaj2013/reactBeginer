import React, { useEffect, useState } from "react";
import { APIURL } from "../../config";
import { CustomTable } from "../../components/ui/customTable";


export const CryptoCurrency = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
     {field:'baseAsset',title:'#'},
     {field:'baseAsset',title:'Name'},
     {field:'bidPrice',title:'sell Price'},
     {field:'highPrice',title:'High Price'},
     {field:'lowPrice',title:'Low Price'},
     {field:'volume',title:'Quantity'},
     {field:'action',title:'Action',render:()=>{<button>Welcome</button>}},
  ]

 

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setData(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <div className="container mx-auto my-2">
      {
       error ? <div>Error : {error.message}</div> 
       : !isLoading ? <div>Loading...</div> 
       : data.length > 0 ? <CustomTable columns={columns} tableData={data} /> : null
       }
    </div>
  );
};
