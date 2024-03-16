import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DribbbleShot from './featchers/product/OneProduct'
import ResponsiveAppBar from './ComponnetStyle'
import BasicCard from './featchers/product/ProductDetail'
// import SignUp from "./featchers/user/Login"
// import SignUp from './featchers/order/OrderForm'
import ProductDetail from './featchers/product/ProductDetail'
import { Routes,Route } from 'react-router-dom'
import BigShoppingCart from './featchers/order/BigShoppingBag'
import SignUp from './featchers/user/SignUp'
import LoginFinal from './featchers/user/Login'
import { useDispatch, useSelector } from 'react-redux'
import ProducList from './featchers/product/productList'
import OrderDetails from './featchers/order/orderDetails'
import ProtectedRoute from './featchers/order/ProtectedRoute'
import { userIn } from './featchers/user/userSlice'
import SmallShoppingCart from './featchers/order/smallShoppingBag'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import UpdateProduct from './featchers/product/UpdateProduct'
import AddProduct from './featchers/product/addProduct'
import { fullBag } from './featchers/order/orderSlice'
import Home from './Home'
function App() {
  let Dispatch=useDispatch()
  useEffect(()=>{
    let person= JSON.parse(localStorage.getItem("currentUser"))
    Dispatch(userIn(person))
    // let basket= JSON.parse(localStorage.getItem("currentBasket"))
    // Dispatch(fullBag(basket))
   },[])    

return (
    <>  
{/* <div class="bg-image hover-zoom">
  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp" class="w-100" />
</div> */}
{/* <Home/> */}
    <ResponsiveAppBar/>
    <Routes> 
    <Route path="/" element={<Home />}/>
    <Route path="products" element={<ProducList />}>
    <Route path='smallShoppingCart' element={<SmallShoppingCart/>}/>
    <Route path=":id" element={<ProductDetail />} />
    </Route>
    <Route path='finishOrder' element={
    <ProtectedRoute>
    <OrderDetails/>
    </ProtectedRoute>}/>

    <Route path="shoppingBag" element={<ProtectedRoute>
      <BigShoppingCart/>
    </ProtectedRoute>}/>

    <Route path="login" element={<ProtectedRoute><LoginFinal /></ProtectedRoute>} />
    <Route path="addProduct" element={<ProtectedRoute><AddProduct/></ProtectedRoute>} />

    <Route path="SignUp" element={<ProtectedRoute><SignUp /></ProtectedRoute>} />
    
    <Route path='UpdateProduct' element={<ProtectedRoute><UpdateProduct/></ProtectedRoute>}> 
    <Route path=":id" element={<UpdateProduct/>} />
    </Route>
    </Routes>

    </>
  )
}

export default App