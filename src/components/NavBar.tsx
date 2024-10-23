import type Pokemon from "../interfaces/Pokemon.tsx";

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	const handleClick = () => {
		pokemonList[pokemonIndex].name === "pikachu" && alert("pika pikachu !!!");
		setPokemonIndex(
			pokemonList
				.map((pokemon) => pokemon.name)
				.indexOf(pokemonList[pokemonIndex].name),
		);
	};

	return (
		<button type="button" onClick={handleClick}>
			{pokemonList[pokemonIndex].name}
		</button>
	);
}

export default NavBar;
