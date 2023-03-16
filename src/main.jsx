import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage'
import {CHAT_PAGE, HOME_URL, LOGIN_URL, REGISTER_URL, USER_PAGE, REVIEW_PAGE,CATALOG_PAGE,PROFILE_PAGE,DATE_PAGE } from "./constants/urls";
import './index.css'
import UserPage from './pages/UserPage/UserPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<HomePage/>}/>
        <Route path={REGISTER_URL} element={<RegisterPage/>}/>
        <Route path={LOGIN_URL} element={<LoginPage/>}/>
        <Route path={USER_PAGE} element={<UserPage/>}/>
        <Route path={CHAT_PAGE} element={<h1>CHAT PAGE</h1>}/>
        <Route path={REVIEW_PAGE} element={<h1>REVIEW PAGE</h1>}/>
        <Route path={CATALOG_PAGE} element={<h1>CATALOG PAGE</h1>}/>
        <Route path={PROFILE_PAGE} element={<h1>PROFILE PAGE</h1>}/>
        <Route path={DATE_PAGE} element={<h1>DATE PAGE</h1>}/>
        


        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



