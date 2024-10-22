import "./App.css";
import PokemonCard from "./components/PokemonCard.tsx";

function App() {
	return (
		<div>
			<PokemonCard name={pokemonList[1].name} imgSrc={pokemonList[1].imgSrc} />
		</div>
	);
}

const pokemonList = [
	{
		name: "Bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},

	{
		name: "Mew",
	},
];

export default App;
