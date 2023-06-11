/* eslint-disable no-unused-vars */

import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/Users";
import UserBlog from "./components/UserBlog";
import UserPostForm from "./components/UserPostForm";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/:userId/post" element={<UserPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
