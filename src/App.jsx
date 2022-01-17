import Header from './components/Header'
import {useEffect, useState} from "react";
import {Navigate, Route,Routes} from "react-router-dom";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import ProductsPage from "./pages/ProductsPage";


function App() {
    const [products, setProducts] = useState([])
    const [basket, setBasket] = useState([])


    function updateQuantity(product, amount) {
        const newBasket = JSON.parse(JSON.stringify(basket));
        const match = newBasket.find(prod => prod.id === product.id)
        match.quantity = amount;
        setBasket(newBasket)
    }

    function getProductsFromServer() {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(productFromServer => setProducts(productFromServer))
    }
    useEffect(getProductsFromServer, [])

    return (
    <>
      <Header />
      <main>
        {
          //Create your routes here
            <Routes>
                <Route index element={<Navigate replace to='/products' />} />
                <Route path='/products' element={<Products products={products} />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/products/:id' element={<ProductsPage basket={basket} setBasket={setBasket} updateQuantity={updateQuantity} />} />
                <Route path='/categories/:id' element={<CategoryProducts products={products} />} />
                <Route path='/basket' element={<Basket basket={basket} setBasket={setBasket} updateQuantity={updateQuantity} />} />
                <Route path='*' element={<NotFound />} />

            </Routes>
        }
      </main>
    </>
  )
}

export default App
