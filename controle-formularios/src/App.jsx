import { useState } from 'react';

function App() {
    const [texto, setTexto] = useState('');

    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h2>O Espelho (Input Controlado) 🪞</h2>

            <input
                type="text"
                placeholder="Digite algo misterioso..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f3f3f3', borderRadius: '10px' }}>
                <p style={{ color: '#888', margin: '0 0 5px 0' }}>Você está digitando:</p>

                <strong style={{ fontSize: '1.5rem', color: '#2980b9' }}>
                    {texto === "" ? "..." : texto}
                </strong>
            </div>

        </div>
    );
}

export default App;
