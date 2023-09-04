import { Box, Grid } from "@mui/material";
import PokemonCard from "./pokemonCard";
import PokemonHead from "./pokemonHead";
import PokemonFilter from "./pokemonFilter";
import PokemonFooter from "./pokemonFooter";
import { useState } from "react";
import PokemonSearch from "./pokemonSearch";
import PokemonCardList from "./pokemonCardList";
import PokemonInfo from "./pokemonInfo";
import FavoritePokemonsPage from "./favoritePokemonsPage";
import MyPokemonsPage from "./myPokePage";

function PokemonMainPage({ pokemons, isLoading, setPokemons }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFavVisible, setIsFavVisible] = useState(false);
  const [isPokeInfo, setIsPokeInfo] = useState(false);
  const [isMyPoke, setIsMyPoke] = useState(false);
  const [isPokeHeadVisible, setIsPokeHeadVisible] = useState(true);
  const [isPokeFooter, setIsPokeFooter] = useState(true);
  const [foundedPokeList, setFoundedPokeList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [page, setPage] = useState("main");

  const handlePageChange = () => {
    setIsVisible(true);
    setIsFavVisible(false);
    setIsPokeInfo(false);
    setIsMyPoke(false);
    setIsPokeHeadVisible(true);
    setIsPokeFooter(true);
  };

  const handlePokeInfoPage = (selectedPokemon) => {
    setSelectedPokemon(selectedPokemon);
    setIsVisible(false);
    setIsFavVisible(false);
    setIsPokeInfo(true);
    setIsMyPoke(false);
    setIsPokeHeadVisible(false);
    setIsPokeFooter(false);
  };

  const handleFavPokePage = () => {
    setIsVisible(false);
    setIsFavVisible(true);
    setIsPokeInfo(false);
    setIsMyPoke(false);
    setIsPokeHeadVisible(true);
    setIsPokeFooter(true);
  };

  const handleMyPokePage = () => {
    setIsVisible(false);
    setIsFavVisible(false);
    setIsPokeInfo(false);
    setIsMyPoke(true);
    setIsPokeHeadVisible(true);
    setIsPokeFooter(true);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width="100%"
      overflow={"auto"}
      height={"100%"}
      sx={{ overflowX: "clip", backgroundColor: "#707573" }}
    >
      <PokemonHead
        isPokeHeadVisible={isPokeHeadVisible}
        handlePageChange={handlePageChange}
      />
      <PokemonFilter setPokemons={setPokemons} isVisible={isVisible} pokemons={pokemons} />
      <PokemonSearch
        isVisible={isVisible}
        pokemons={pokemons}
        searchValue={searchValue}
        setFoundedPokeList={setFoundedPokeList}
        setSearchValue={setSearchValue}
      />

      {isVisible && searchValue === "" ? (
        <Box width={"100%"} paddingBottom={"50px"}>
          {!isLoading && (
            <PokemonCardList
              pokemonsList={pokemons}
              isVisible={isVisible}
              handlePokeInfoPage={handlePokeInfoPage}
            />
          )}
        </Box>
      ) : (
        isVisible && (
          <Box width={"100%"} paddingBottom={"50px"}>
            <Box>
              {!isLoading && (
                <PokemonCardList
                  pokemonsList={foundedPokeList}
                  isVisible={isVisible}
                  handlePokeInfoPage={handlePokeInfoPage}
                />
              )}
            </Box>
          </Box>
        )
      )}
      <FavoritePokemonsPage
        isFavVisible={isFavVisible}
        handlePokeInfoPage={handlePokeInfoPage}
      />
      <MyPokemonsPage isMyPoke={isMyPoke} />
      <PokemonFooter
        handlePageChange={handlePageChange}
        isPokeFooter={isPokeFooter}
        handleFavPokePage={handleFavPokePage}
        handleMyPokePage={handleMyPokePage}
      />
      <PokemonInfo
        isPokeInfo={isPokeInfo}
        pokemon={selectedPokemon}
        handlePageChange={handlePageChange}
        handleFavPokePage={handleFavPokePage}
        handleMyPokePage={handleMyPokePage}
      />
    </Box>
  );
}

export default PokemonMainPage;
