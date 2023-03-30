import PropTypes from 'prop-types';
function PokemonCard(props) {

let pokemon = props.pokemon;



return ( 
<figure>
{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt= {pokemon.name}/> : <p>???</p>}
<figcaption>{props.name}</figcaption>
</figure>
)
}
PokemonCard.propTypes = {
    props: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }

export default PokemonCard;