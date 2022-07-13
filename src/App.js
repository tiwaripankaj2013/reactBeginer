import { BrowserRouter, Routes,Route,Navigate} from "react-router-dom";
import React,{ Suspense } from "react";
import Header from "./components/header";
import Home from "./pages/home";
import {ProgressBar} from "./components/progressBar";
import OnlineShop from "./pages/onlineshop";
import PageNotFound from "./pages/pageNotFound";
import RatingList from "./pages/rating";
import UiComponent from "./pages/uiComponent";
import { CryptoCurrency } from "./pages/cryptoCurency";
import Posts from "./pages/posts";
import Cart from "./components/product/cart";
import Products from "./components/product";
import UsersList from "./pages/user/usersList";
import SignupUser from "./components/UserSignupLogin/register";
import ErrorBoundary from './components/errorBoundary';
import Theme from "./components/theme";
const About = React.lazy(() => import('./pages/about'));
const DynamicRouting = React.lazy(() => import('./components/dynamicRouting')); //lazy loading not default load page

function App() {
  return (
  <BrowserRouter>
  <ErrorBoundary>
   <Header /> 
   <Suspense
   fallback={<p>Loadin...</p>}
   >
    <Routes>
      <Route path="/" element={<Navigate replace to={"/home"} />} /> 
      <Route path="/home" element={<Home/>} /> 
      <Route path="/progress" element={<ProgressBar/>} /> 
      <Route path="/about" exact element={<About/>} /> 
      <Route path="/users/*" element={<DynamicRouting/>} /> 
      <Route path="/usersList" element={<UsersList/>} /> 
      <Route path="/onlineShop" element={<OnlineShop/>} /> 
      <Route path="/rating" element={<RatingList />} /> 
      <Route path="/cryptoCurrency" element={<CryptoCurrency />} /> 
      <Route path="/uiComponent" element={<UiComponent />} /> 
      <Route path="/signup" element={<SignupUser />} /> 
      <Route path="/products" element={<Products />} /> 
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/theme" element={<Theme />} /> 
      <Route path="*" element={<PageNotFound/>} /> 
    </Routes>
    </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
  
  );
}

export default App;
