import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import HomePage from './pages/HomePage/HomePage';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { HOME_URL, LOGIN_URL, REGISTER_URL, USER_PAGE, REGISTER_URL2 } from "./constants/urls";
import "./index.css";
import UserPage from "./pages/UserPage/UserPage";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import Private from "./components/Route/Private";
import ChatPage from "./Pages/ChatPage/Home";
import RegisterPage2 from "./Pages/RegisterPage/RegisterPage-2";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<h1>HOME PAGE</h1>}/>
        <Route path={REGISTER_URL} element={<RegisterPage/>}/>
        <Route path={LOGIN_URL} element={<LoginPage/>}/>
        <Route path={USER_PAGE} element={<UserPage/>}/>
        <Route path={REGISTER_URL2} element={<RegisterPage2/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



