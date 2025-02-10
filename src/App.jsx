/* 
Componentes : 

- Son funciones 
- Arrancan en mayuscula
- tienen retorno si o si
- se pueden retornar muchos tipos de datos pero casi siempre es JSX
- no se puede retornar DOS o mas elementos JSX en simultaneo
- me permiten tener UI

*/
import Header from "./Header";
import { Button } from "antd";

function App() {
  return (
    <div>
      <Header />

      {/* Main */}
      <main>
        <h2>Home</h2>
        <Button type="primary">Button</Button>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; Copyright 2025 - Horacio Gutierrez</p>
      </footer>
    </div>
  );
}

export default App;
