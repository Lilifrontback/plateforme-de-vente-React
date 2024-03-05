import { useState } from "react";

function HomePage() {


    // state
    const [HomeCard, setHomeCard] = useState ([
        { id: 1, nom: "Canapé", prix: 150 },
        { id: 2, nom: "Biblio", prix: 100 },
        { id: 3, nom: "Chaises", prix: 30 },
    ]);

    // comportement


    // affichage

    return (
        <h1>Les Chaises Musicales</h1>
    )
}

export default HomePage;