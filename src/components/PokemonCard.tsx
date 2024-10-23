import type Pokemon from "../interfaces/Pokemon.tsx";

function PokemonCard({ name, imgSrc }: Pokemon) {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
