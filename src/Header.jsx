import { Flex } from "antd";

export const Header = () => {
  return (
    <Flex component="header" justify="space-between" align="center">
      <h1>Mi Ecommerce</h1>
      <nav>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <img src="/shopping-cart.svg" alt="Icono de carrito" />
      </nav>
    </Flex>
  );
}
