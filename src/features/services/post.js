import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const postApi = createApi({
  reducerPath:'postApi',
  // base url define it's works similar to axios 
  baseQuery: fetchBaseQuery({
    baseUrl:'https://jsonplaceholder.typicode.com/',
  }),

//  query call for fetch data from api 
endpoints: (build) => ({
  getAllPost: build.query({
   query: () => ({
    url: 'posts',
    method: 'GET'
   })
  })
})
});
/*getAllPost here call as hooks useGetAllPostQuery query here call in hooks */
export const {useGetAllPostQuery} = postApi;