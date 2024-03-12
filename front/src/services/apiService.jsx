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

