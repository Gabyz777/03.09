function ItemCardapio({ nome, descricao, preco, adicionarItem }) {
    return (
        <div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <div style={{ fontWeight: 'bold', color: 'green' }}>R$ {preco.toFixed(2).replace('.', ',')}</div>
            <button onClick={adicionarItem}>+ Adicionar</button>
        </div>
    );
}

export default ItemCardapio;
