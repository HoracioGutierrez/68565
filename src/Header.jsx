import { Flex } from "antd";

export const Header = () => {
  return (
    <Flex component="header" justify="space-between" align="center" className="header">
      <h1>Mi Ecommerce</h1>
      <nav className="header__nav">
        <a href="#" className="header__link">link 1</a>
        <a href="#" className="header__link">link 2</a>
        <a href="#" className="header__link">link 3</a>
        <img src="/shopping-cart.svg" alt="Icono de carrito" />
      </nav>
    </Flex>
  );
}
