function PokemonCard() {
   const pokemon = pokemonList[1];
   const blabla = pokemon.imgSrc ? <img src={pokemon.imgSrc} alt= "bulbasaur"/> : <p>???</p>;
return <figure>{blabla}</figure>;
    <figcaption>bulbasaur</figcaption>


}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    
  },
];

export default PokemonCard;