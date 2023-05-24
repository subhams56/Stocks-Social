import { useState } from 'react'
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Account from "./Components/Account"

import { Routes ,Route } from 'react-router-dom'


import Logo from './assets/logo.jpg'
import HomePage from "./Components/HomePage"
import Investments from './Components/Investments'
import AboutUs from './Components/AboutUs'
import Predictor from './Components/Predictor'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Faq from './Components/Faq'
import MockApi from './Api/MockApi'
import ReviewForm from './Components/ReviewForm'
import ShowReviews from './Components/ShowReviews'
import Market from './Pages/Market'
import News from './Pages/News'
import Quotations from './Pages/Quotations'
import Recommendations from './Pages/Recommendations'
import AddStocks from './Components/AddStocks'
import { FAQOne } from './Components/FAQOne'
import StockAdd from './Components/stockAdd'
import StockFeed from './Components/StockFeed'
import StockDelete from './Components/StockDelete'







function App() {
  
Routes
  return (
    <div >
      
      
     
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/investments" element={<Investments/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/predictor" element={<Predictor/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/api" element={<MockApi/>}/>
        <Route path="/reviewForm" element={<ReviewForm/>}/>
        <Route path="/showReview" element={<ShowReviews/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/market" element={<Market/>}/> 
      <Route path="/recommendations" element={<Recommendations/>}/> 
      <Route path="/quotations" element={<Quotations/>}/> 
      <Route path="/news" element={<News/>}/>
      <Route path="/addstock" element={<StockAdd/>}/>
      <Route path="/deletestock" element={<StockDelete/>}/>
      <Route path="/help" element={<FAQOne/>}/>
      <Route path="/stockFeed" element={<StockFeed/>}/>
      
      
      
        
      </Routes>
     
      
    </div>
  )
}

export default App
