import React from "react";
const apiUrl = "http://localhost:3000/";

function fetchMeubles() {
  return fetch(`${apiUrl}meubles`).then((response) => response.json());
}

export default fetchMeubles;
