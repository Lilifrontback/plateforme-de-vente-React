// Redondant? A suppr?
export default function HomeCard({ id, nom, prix }) {
    return (
        <div>
            <h3>{nom}</h3>
            <p>{prix}€</p>
        </div>
    )
}