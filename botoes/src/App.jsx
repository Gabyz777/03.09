
function App() {
  const categorias = ["Todos", "Pizzas", "Hambúrgueres", "Bebidas", "Sobremesas"];

  return (
    <div>
      {categorias.map((categoria, index) => (
        <button key={index} style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}>
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default App;
