// https://api.themoviedb.org/3/movie/550?api_key=c3af9aa883165bf5f7b94ca5a97ada14

// let jsonPlaceHolder = 'https://jsonplaceholder.typicode.com/posts';
// let itemDeatils  = 'https://jsonplaceholder.typicode.com/posts/1';
// let users = 'https://jsonplaceholder.typicode.com/users/';
// let userDetails = 'https://jsonplaceholder.typicode.com/users/1';
// let url = 'https://api.themoviedb.org/3/movie/550';
// let api_key = 'c3af9aa883165bf5f7b94ca5a97ada14';

import axios from 'axios';

const jsonApi =  axios.create({
   baseURL : 'https://jsonplaceholder.typicode.com',
})
export default jsonApi ;