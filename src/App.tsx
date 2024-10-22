import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
import { useState } from "react";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const previousClick = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	const nextClick = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
		<div>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			{(() => {
				if (pokemonIndex > 0) {
					return (
						<button type="button" onClick={previousClick}>
							previous
						</button>
					);
				}
			})()}
			{(() => {
				if (pokemonIndex < pokemonList.length - 1) {
					return (
						<button type="button" onClick={nextClick}>
							next
						</button>
					);
				}
			})()}
		</div>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},

	{
		name: "charmander",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},

	{
		name: "squirtle",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},

	{
		name: "pikachu",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},

	{
		name: "mew",
	},
];

export default App;
