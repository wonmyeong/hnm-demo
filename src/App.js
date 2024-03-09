import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import Container from "react-bootstrap/Container";
import data from "./db.json";

function App() {
  return (
    <Container>
      <Navbar />
      <MenuBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductAll data={data} />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
