import { useState } from "react";

function HomePage() {


    // state
    const meubles = [
        { id: 1, nom: "Canapé", prix: 150 },
        { id: 2, nom: "Biblio", prix: 100 },
        { id: 3, nom: "Chaises", prix: 30 },
    ];

    // comportement


    // affichage

    return (
        <div className="App">
            <h1>Les Chaises Musicales</h1>
        
            <div className="meubles">
                {meubles.map(meuble => (
                <div key = {meuble.id}>
                    <h2>{meuble.nom}</h2>
                    <p>{meuble.prix}€</p>
                </div>
                
            ))}
        
        </div>
        </div>
    )
}

export default HomePage;