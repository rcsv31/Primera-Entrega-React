import "./ItemListContainer.css";
const ItemListContainer = ({ greetings }) => {
  return (
    <div className="listaContenedora">
      <h1 className="mensaje">{greetings.mensaje}</h1>
    </div>
  );
};

export default ItemListContainer;
