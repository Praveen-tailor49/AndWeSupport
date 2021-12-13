import React, { useState, useEffect } from "react";
import Home from "./page/Home";
import Login from "./page/Login";
import SingIn from "./component/SingIn";
import Admin from "./page/Admin";
import Error404 from "./page/Error404";
import BuyProduct from "./page/BuyProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import AddProduct from "./page/AddProduct";
import AddCate from "./page/AddCate";
import ViewProduct from "./page/ViewProduct";
import ViewCategory from "./page/ViewCategory";
import CategoryList from "./page/CategoryList";
import AuthUser from "./AuthUser";
import CheckOut from "./page/CheckOut";
import Order from "./page/Order";
import Placed from "./page/Placed";
import ViewOrderU from "./page/ViewOrderU";
import ViewOrderA from "./page/ViewOrderA";
import LoginAdmin from "./page/LoginAdmin";
import AuthAdmin from "./AuthAdmin";


function App() {

  const [categoryList, setCategoryList] = useState([])
  const [data, setdata] = useState([])
//  const [productName, setProductName] = useState('')
//  const [productImage, setProductImage] = useState('')
 const [productPrice, setProductPrice] = useState('')

  const sendData = (id) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "id": id });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/productList", requestOptions)
      .then(response => response.json())
      .then(result => setCategoryList(result))
      .catch(error => console.log('error', error));
  }

  const buyProduct = (productData) =>{

    localStorage.setItem('product',JSON.stringify(productData))
    localStorage.setItem('productName', productData.ProductName)
    localStorage.setItem('productImage', productData.ProductImage)
    setProductPrice(productData.ProductPrice)


  }


  return (
    <>
      
     
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path='*' element={<Error404 />} />
            <Route exact path='/singin' element={<SingIn/>} />
            <Route exact path='/admin-login' element={<LoginAdmin/>} />


            <Route path='/add-category' element={<AuthAdmin />} />
            {/* Admin */}

            <Route path='/add-category' element={<AuthAdmin cmp={AddCate} />} />
            <Route path='/add-product' element={<AuthAdmin cmp={AddProduct} />} />
            <Route path='/view-product' element={<AuthAdmin cmp={ViewProduct} />} />
            <Route path='/view-category' element={<AuthAdmin cmp={ViewCategory} sendData={sendData} />} />
            <Route path='/category-list' element={<AuthAdmin cmp={CategoryList} categoryList={categoryList} />} />
            <Route exact path='/admin' element={<AuthAdmin cmp={Admin} />} />
            <Route exact path='/view-order-list' element={<AuthAdmin cmp={ViewOrderA} />} />


            {/* User */}
            
            <Route path='/home' element={<AuthUser cmp={Home} buyProduct={buyProduct}/>} />
            <Route path='/view-order' element={<AuthUser cmp={ViewOrderU}/>} />
            <Route path='/placed' element={<AuthUser cmp={Placed}/>} />
            <Route path='/order-placed' element={<AuthUser cmp={Order}/>} />
            <Route  path='/checkOut' element={<AuthUser cmp={CheckOut}/>} />
            <Route path='/buy-product'  element={<AuthUser cmp={BuyProduct} data={data} productPrice={productPrice}/>} />


  
            
          </Routes>
      


    </>
  );
}

export default App;
