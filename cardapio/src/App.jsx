import ItemCardapio from './components/ItemCardapio.jsx';

function App() {
    return (
        <div>
            <h1>Senai Delivery</h1>
            <ItemCardapio
                nome="Hambúrguer de Frango"
                descricao="Delicioso hambúrguer de frango com queijo e alface."
                preco={12.99}
            />
            <ItemCardapio
                nome="Hambúrguer de Carne"
                descricao="Delicioso hambúrguer de carne com queijo e alface."
                preco={14.99}
            />
            <ItemCardapio
                nome="Pizza Margherita"
                descricao="Pizza clássica com molho de tomate, mussarela e manjericão."
                preco={19.99}
            />
        </div>
    );
}

export default App;
