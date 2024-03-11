import React from "react"

function fetchMeubles() {
fetch('http://localhost:3000/meubles')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
}

export default fetchMeubles