import { Grid } from "@mui/material";
import PokemonCard from "./pokemonCard";

function PokemonCardList({ pokemonsList, isVisible,handlePokeInfoPage }) {
  return (
   isVisible && pokemonsList &&
    pokemonsList.length && (
      <Grid container spacing={2} padding={"15px"}>
        {pokemonsList?.map((item, index) => (
          <PokemonCard key={index} index={index} pokemon={item} isVisible={isVisible}  handlePokeInfoPage={handlePokeInfoPage}/>
        ))}
      </Grid>
    )
  );
}

export default PokemonCardList;
