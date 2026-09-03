import { useState } from 'react';

function App() {
    const [curtidas, setCurtidas] = useState(0);
    return (
        <>
            <p>{curtidas} pessoas curtiram isso!</p>
            <button onClick={() => setCurtidas(curtidas + 1)}>Curtir</button>
        </>
    );
}

export default App;
