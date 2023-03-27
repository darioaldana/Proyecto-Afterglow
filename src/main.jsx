import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterPage2 from "./pages/RegisterPage/RegisterPage-2";
import UserPage from "./pages/UserPage/UserPage";
import Private from "./components/Route/Private";
import Public from "./components/Route/Public";
import Layout from "./pages/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";

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
  APPOINTMENTS_PAGE,
} from "./constants/urls";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={HOME_URL}
            element={
              <Public>
                <HomePage />
              </Public>
            }
          />
          <Route
            path={REGISTER_URL}
            element={
              <Public>
                <RegisterPage />
              </Public>
            }
          />
          <Route
            path={REGISTER_URL2}
            element={
              <Public>
                <RegisterPage2 />
              </Public>
            }
          />
          <Route
            path={LOGIN_URL}
            element={
              <Public>
                <LoginPage />
              </Public>
            }
          />
          <Route
            path={USER_PAGE}
            element={
              <Private>
                <UserPage />
              </Private>
            }
          />
          <Route
            path={CHAT_PAGE}
            element={
              <Private>
                <ChatPage />
              </Private>
            }
          />
          <Route
            path={REVIEW_PAGE}
            element={
              <Private>
                <h1>REVIEW PAGE</h1>
              </Private>
            }
          />
          <Route
            path={CATALOG_PAGE}
            element={
              <Private>
                <CatalogPage />
              </Private>
            }
          />
          <Route
            path={PROFILE_PAGE}
            element={
              <Private>
                <h1>PROFILE PAGE</h1>
              </Private>
            }
          />
          <Route
            path={APPOINTMENTS_PAGE}
            element={
              <Private>
                <AppointmentsPage/>
              </Private>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
