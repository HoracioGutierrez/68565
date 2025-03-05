import React from "react";
import { Header } from "./Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";

export default () => {
  return (
    <>
      <Header />

      {/* if(urlNavegador == "/") { return <ItemListContainer/> } */}
      {/* if(urlNavegador == "/carrito") { return <Carrito/> } */}
      {/* if(urlNavegador == "/perfumes") { return <Perfumes/> } */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/categorias/:id" element={<ItemListContainer/>} />
        {/* <Route path="/producto/:id" element={<ProductDetailContainer/>} /> */}
      </Routes>

      <Footer />
    </>
  );
}
