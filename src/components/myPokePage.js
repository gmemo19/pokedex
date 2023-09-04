import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PokemonCardList from "./pokemonCardList";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function MyPokemonsPage({ pokemons, isMyPoke, handlePokeInfoPage }) {
  const { t } = useTranslation();
  const myPokemons = JSON.parse(localStorage.getItem("myPokemons")) || [];
  const myPokemonList = myPokemons.map((myPokeId) => pokemons.find(pokemon => pokemon.pokemonDetail.id === myPokeId));
  return (
    (isMyPoke &&
      <Grid height={"100%"} width={"100%"}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <Box
            fontSize={"20px"}
            fontWeight={"bold"}
            color={"#ffffff"}
            sx={{ paddingLeft: "15px", paddingTop: "15px" }}
          >
            {t("myPokemons")}
          </Box>
          {myPokemonList.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <SentimentVeryDissatisfiedIcon style={{ fill: "#ffffff" }} />
              <Box fontSize={"14px"} fontWeight={"bold"} color={"#ffffff"}>
                {t("youHaveNotAnyPokemon")}
              </Box>
            </Box>
          ) : (
            <PokemonCardList
              pokemonsList={myPokemonList}
              isVisible={isMyPoke}
              handlePokeInfoPage={handlePokeInfoPage}
            />
          )}
        </Box>
      </Grid >
    )
  );
}

export default MyPokemonsPage;