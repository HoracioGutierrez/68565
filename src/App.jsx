import React from "react";
import { Header } from "./Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";
import ProductDetailContainer from "./components/ProductDetailContainer";

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/categorias/:id" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ProductDetailContainer />} />
      </Routes>
      <Footer />
    </>
  );
}
