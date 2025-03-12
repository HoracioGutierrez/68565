import { Flex } from "antd";
import { NavLink } from "react-router-dom";
import CartWidget from "./components/CartWidget";

export const Header = () => {
  return (
    <Flex component="header" justify="space-between" align="center" className="header">
      <h1>Mi Ecommerce</h1>
      <nav className="header__nav">
        <NavLink viewTransition to="/" className="header__link">home</NavLink>
        <NavLink viewTransition to="/categorias/perfumes" className="header__link">perfumes</NavLink>
        <NavLink viewTransition to="/categorias/muebles" className="header__link">muebles</NavLink>
        <NavLink viewTransition to="/categorias/comida" className="header__link">comida</NavLink>
        <CartWidget/>
      </nav>
    </Flex>
  );
}
