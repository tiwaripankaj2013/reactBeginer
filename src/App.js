import { BrowserRouter, Routes,Route} from "react-router-dom";
import About from "./component/about";
import DynamicRouting from "./component/dynamicRouting";
import Header from "./component/header";
import Home from "./component/home";
import PageNotFound from "./component/pageNotFound";
function App() {
  return (
  <BrowserRouter>
   <Header /> 
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/about" element={<About/>} /> 
      <Route path="/users" element={<DynamicRouting/>} /> 
      <Route path="*" element={<PageNotFound/>} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
