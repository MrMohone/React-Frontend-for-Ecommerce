import { BrowserRouter, Routes,Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from './assets/components/home/HomePage'
import NotFounde from "./assets/components/ui/NotFound"
import ProductPage from "./assets/components/product/ProductPage"
import CartPage from "./assets/components/cart/CartPage"
import { useState,useEffect } from "react"
import api from "./api"
import CheckoutPage from "./assets/components/checkout/CheckoutPage"



const App = () => {
  const [numCartItems, setNumberCartItems] = useState(0)
  const cart_code  = localStorage.getItem('cart_code')

  useEffect(function(){
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumberCartItems(res.data.num_of_items)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  },[])
  
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<MainLayout numCartItems={numCartItems}/>}>
      <Route index element={<HomePage />}/>
      <Route path="products/:slug" element={<ProductPage setNumberCartItems={setNumberCartItems}/>}/>
      <Route path="cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
      <Route path="*" element={<NotFounde/>}/> 
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App