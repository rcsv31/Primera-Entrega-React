/*import NavBar from "./components/navBar/NavBar";*/
import Header from "./components/layout/header/Header";
import ItemListContainer from "./components/iTemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer
        greetings={{
          mensaje: "¡Bienvenido a Mayju! Tu tienda de sellos personalizados",
        }}
      />
    </div>
  );
}

export default App;
