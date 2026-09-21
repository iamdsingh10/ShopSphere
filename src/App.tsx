import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"

function App(){
  return (
  <BrowserRouter>
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path= '/products/:id' element={<ProductDetails/>}/>
    </Routes>
  </MainLayout>
  </BrowserRouter>
  )
}

export default App