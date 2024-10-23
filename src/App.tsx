import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";
import NavBar from "./components/NavBar.tsx";
import { useState } from "react";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	return (
		<div>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			{pokemonList.map((pokemon, index) => (
				<NavBar
					key={pokemon.name}
					pokemonIndex={index}
					setPokemonIndex={setPokemonIndex}
					pokemonList={pokemonList}
				/>
			))}
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
