import React from "react";
const apiUrl = "http://localhost:3000/";

export function fetchMeubles() {
return fetch(`${apiUrl}meubles`)
.then(response => response.json())
}

export function fetchMeublesEnStock() {
    return fetch(`${apiUrl}meublesenstock`)
    .then(response => response.json())    
}

export function fetchListeCouleur() {
    return fetch(`${apiUrl}admin/couleur`)
    .then(response => response.json())
}

export function fetchListeMatiere() {
    return fetch(`${apiUrl}admin/matiere`)
    .then(response => response.json())
}

export function fetchListeCategorie() {
    return fetch(`${apiUrl}admin/categorie`)
    .then(response => response.json())
}


export function fetchAjoutMeuble(donnees){
    return fetch(`${apiUrl}admin`,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(donnees), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
        
    })
     // transforme la réponse JSON reçue en objet JavaScript natif;
}

export function fetchSuppressionMeuble(id){
    return fetch(`${apiUrl}admin/${id}`,{
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        
    })
     // transforme la réponse JSON reçue en objet JavaScript natif;
}
    
       

export function fetchMeublesFiltres(filtre,valeur) {
    return fetch(`${apiUrl}meubles/?{filtre}={valeur}`)
    .then(response => response.json())
}

