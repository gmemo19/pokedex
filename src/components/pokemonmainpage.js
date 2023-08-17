import { Box, Grid } from "@mui/material";
import PokemonCard from "./pokemonCard";
import PokemonHead from "./pokemonHead";
import PokemonFilter from "./pokeFilter";
import PokemonFooter from "./pokemonFooter";
import { useState } from "react";
import PokemonSearch from "./pokeSearch";

function PokemonMainPage({ pokemons, isLoading, pokemon }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFavVisible, setIsFavVisible] = useState(false);
  const [isPokeInfo, setIsPokeInfo] = useState(false);
  const [isMyPoke, setIsMyPoke] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isPokeHeadVisible, setIsPokeHeadVisible] = useState(true);
  const [foundedPokeList, setFoundedPokeList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handlePageChange = () => {
    setIsVisible(true);
    setIsFavVisible(false);
    setIsPokeInfo(false);
    setIsMyPoke(false);
    setIsInfoVisible(false);
    setIsPokeHeadVisible(true);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      width="100%"
      sx={{ overflowX: "clip", backgroundColor: "#707573" }}
    >
      <PokemonHead />
      <PokemonFilter />
      <PokemonSearch
        isVisible={isVisible}
        pokemons={pokemons}
        searchValue={searchValue}
        setFoundedPokeList={setFoundedPokeList}
        setSearchValue={setSearchValue} 
      />
      {searchValue === "" ? (
        <Box>
          <Box padding={2}>
            {!isLoading && (
              <Grid container spacing={2}>
                {pokemons?.map((pokemon, index) => (
                  <PokemonCard
                    index={index}
                    pokemon={pokemon}
                    pokemonDetail={pokemon.pokemonDetail}
                    isVisible={isVisible}
                  />
                ))}
              </Grid>
            )}
          </Box>
          <PokemonFooter handlePageChange={handlePageChange} />
        </Box>
      ) : (
        <Box padding={"15px"}>
          {foundedPokeList.length > 0 &&
            foundedPokeList?.map((poke, i) => {
              return (
                <Box padding={2}>
                  {!isLoading && (
                    <Grid container spacing={2}>
                      {pokemons?.map((pokemon, index) => (
                        <PokemonCard
                          index={index}
                          pokemon={pokemon}
                          pokemonDetail={pokemon.pokemonDetail}
                          isVisible={isVisible}
                        />
                      ))}
                    </Grid>
                  )}
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
}

export default PokemonMainPage;
