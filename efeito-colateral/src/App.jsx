import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const [notificacoes, setNotificacoes] = useState(0);

    useEffect(() => {
        document.title = "Mensagens: " + notificacoes;
    }, [notificacoes]);

    return (
        <div>
            <h3>Mensagens: {notificacoes}</h3>
            <button onClick={() => setNotificacoes(notificacoes + 1)}>Receber Mensagem</button>
        </div>
    );
}

export default App;
