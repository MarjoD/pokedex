interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	const previousClick = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	const nextClick = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	return (
		/* {(() => {
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
			})()} */
		<div>
			{pokemonIndex > 0 && (
				<button type="button" onClick={previousClick}>
					previous
				</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={nextClick}>
					next
				</button>
			)}
		</div>
	);
}

export default NavBar;
