import { BrowserRouter, Routes,Route,Navigate} from "react-router-dom";
import React,{ Suspense } from "react";
import Header from "./component/header";
import Home from "./pages/home";
import {ProgressBar} from "./component/progressBar";
import OnlineShop from "./pages/onlineshop";
import PageNotFound from "./pages/pageNotFound";
import RatingList from "./pages/rating";
import UiComponent from "./pages/uiComponent";
import { CryptoCurrency } from "./pages/cryptoCurency";
const About = React.lazy(() => import('./pages/about'));
const DynamicRouting = React.lazy(() => import('./component/dynamicRouting')); //lazy loading not default load page

function App() {
  return (
  <BrowserRouter>
   <Header /> 
   <Suspense
   fallback={<p>Loadin...</p>}
   >
    <Routes>
      <Route path="/" element={<Navigate replace to={"/home"} />} /> 
      <Route path="/home" element={<ProgressBar/>} /> 
      <Route path="/about" exact element={<About/>} /> 
      <Route path="/users/*" element={<DynamicRouting/>} /> 
      <Route path="/onlineShop" element={<OnlineShop/>} /> 
      <Route path="/rating" element={<RatingList />} /> 
      <Route path="/cryptoCurrency" element={<CryptoCurrency />} /> 
      <Route path="/uiComponent" element={<UiComponent />} /> 
      <Route path="*" element={<PageNotFound/>} /> 
    </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
