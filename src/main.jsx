import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterPage2 from "./pages/RegisterPage/RegisterPage-2";
import UserPage from "./pages/UserPage/UserPage";
//import Private from "./components/Route/Private";
//import ChatPage from "./pages/ChatPage/Home";
import Layout from "./pages/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import {
  CHAT_PAGE,
  HOME_URL,
  LOGIN_URL,
  REGISTER_URL,
  REGISTER_URL2,
  USER_PAGE,
  REVIEW_PAGE,
  CATALOG_PAGE,
  PROFILE_PAGE,
  DATE_PAGE,
} from "./constants/urls";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route path={REGISTER_URL2} element={<RegisterPage2 />} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={USER_PAGE} element={<UserPage />} />
          <Route path={CHAT_PAGE} element={<h1>CHAT PAGE</h1>} />
          <Route path={REVIEW_PAGE} element={<h1>REVIEW PAGE</h1>} />
          <Route path={CATALOG_PAGE} element={<CatalogPage />} />
          <Route path={PROFILE_PAGE} element={<h1>PROFILE PAGE</h1>} />
          <Route path={DATE_PAGE} element={<h1>DATE PAGE</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
