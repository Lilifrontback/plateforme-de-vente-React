import React from 'react';
import './Home.css'; 

const meuble = [
    {
        id: 1,
        nom: "Canapé",
        prix: 149.99,
        image: "../src/assets/images/canape_gris.jpg",
    },
    {
        id: 2,
        nom: "Armoire",
        prix: 119.99,
        image: "../src/assets/images/armoire.jpg",
    },
    {
        id: 3,
        nom: "Commode",
        prix: 69.99,
        image: "../src/assets/images/commode.jpg",
    },
    {
        id: 4,
        nom: "Bibliothèque",
        prix: 99.99,
        image: "../src/assets/images/biblio.jpg",
    },
    {
        id: 5,
        nom: "Canapé",
        prix: 179.99,
        image: "../src/assets/images/canape_panacota.jpg",
    },
    {
        id: 6,
        nom: "Chaises",
        prix: 39.99,
        image: "../src/assets/images/chaises.jpg",
    },

];

function HomePage() {
    return (
        <div className="home-page">
            <div className="grid">
                {meuble.map(meuble => (
                    <div className="container" key={meuble.id}>
                        <div className="image">
                            <img src={meuble.image} alt={meuble.nom} />
                        </div>
                        <div className="details">
                            <h2><a>{meuble.nom}</a></h2>
                            <p>{meuble.prix}€</p>
                            <button>Ajouter au panier</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;