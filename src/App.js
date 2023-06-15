/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPostForm from "./components/pages/UserPostForm";

import { CurUserContext } from "./components/contexts/CurUserContext";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  const [curUser, setCurUser] = useState("");

  return (
    <CurUserContext.Provider value={{ curUser, setCurUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserBlog />} />
          <Route path="/users/:userId/post" element={<UserPostForm />} />
        </Routes>
      </BrowserRouter>
    </CurUserContext.Provider>
  );
}

export default App;
